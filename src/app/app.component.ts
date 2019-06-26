import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = FirstRunPage;

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

  constructor(private translate: TranslateService, platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen) {
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
}
