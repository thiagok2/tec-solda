import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Nav, Platform, AlertController, ToastController, LoadingController } from 'ionic-angular';

import { AngularFireAuth } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase/app';

import { FirstRunPage } from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = FirstRunPage;

  private statusOfConnection = undefined;
  private user = {
    id: undefined,
    displayName: undefined,
    email: undefined,
    imageUrl: undefined
  }

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Início', component: 'WelcomePage', icon: 'home' },
    { title: 'Inspeção', component: 'InspecaoListPage', icon: 'clipboard' },
    { title: 'Equipe', component: 'SoldadorListPage', icon: 'body' },
    { title: 'Proc. de Soldagem', component: 'ProcessosPage', icon: 'list-box' },
    { title: ' Eletrodo Revestido', component: 'EletrodoRevestidoPage', icon: 'arrow-dropright' },
    { title: ' MIG/MAG', component: 'MigMagPage', icon: 'arrow-dropright' },
    { title: ' TIG', component: 'TigPage', icon: 'arrow-dropright' },
    { title: ' Sobre', component: 'AboutPage', icon: 'contacts' }
  ];

  constructor(private translate: TranslateService,
    public platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private googlePlus: GooglePlus,
    private facebook: Facebook,
    private afAuth: AngularFireAuth,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('pt-br');
    //const browserLang = this.translate.getBrowserLang();


  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  connected() {
    return this.afAuth.authState.subscribe((user: firebase.User) => {
      if (!user) {
        this.user = null;
        return;
      }
      this.user.displayName = user.displayName;
      return true;
    });
  }

  loginWithGoogle() {
    const load = this.loading();
    load.present();
    this.googlePlus.login({})
      .then(res => {
        this.user.id = res.userId;
        this.user.email = res.email;
        this.user.displayName = res.displayName;
        this.user.imageUrl = res.imageUrl;
        this.statusOfConnection = 'connected';
        this.toast('Você esta conectado.')
      })
      .catch(err => {
        console.log(err);
        this.alert();
      });
    load.dismiss();
  }

  loginWithFacebook() {
    const load = this.loading();
    load.present();
    this.facebook.login(['email'])
      .then(response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);

        firebase.auth().signInWithCredential(facebookCredential)
          .then(success => {
            this.user.id = response.authResponse.userID;
            this.user.displayName = success.displayName;
            this.user.email = success.email;
            this.user.imageUrl = `https://graph.facebook.com/${response.authResponse.userID}/picture?type=large`;
            this.statusOfConnection = 'connected';
            this.toast('Você esta conectado.')
          })
          .catch(err => this.alert());

      }).catch((err) => {
        console.log(err);
        this.alert();
      });
    load.dismiss();
  }

  logout() {
    this.statusOfConnection = false;
    this.afAuth.auth.signOut();
    this.googlePlus.logout();
    this.user = {
      id: undefined,
      displayName: undefined,
      email: undefined,
      imageUrl: undefined
    };
  }

  loading() {
    return this.loadingCtrl.create({ content: 'aguarde..' });
  }

  toast(message) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
  }

  alert() {
    this.alertCtrl.create({
      message: 'Não foi possivel realizar o login com Google. Verifique sua conexão com a internet..',
      buttons: ['Ok']
    }).present();
  }


}
