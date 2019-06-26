import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';

import { SoldadorElement } from '../../models/soldador';
import { SoldadorProvider } from '../../providers/soldador/soldador';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';

@IonicPage()
@Component({
	selector: 'page-soldador-list',
	templateUrl: 'soldador-list.html',
})
export class SoldadorListPage {
	private displayName;
	soldadorList: SoldadorElement[] = [];
	private user: any = {};

	constructor(
		public alertCtrl: AlertController,
		private googlePlus: GooglePlus,
		private facebook: Facebook,
		private afAuth: AngularFireAuth,
		public navCtrl: NavController,
		public navParams: NavParams,
		private soldadorProvider: SoldadorProvider,
		private toast: ToastController) {

		afAuth.authState.subscribe((user: firebase.User) => {
			if (!user) {
				this.displayName = null;
				return;
			}
			this.displayName = user.displayName;
		});
	}

	ionViewDidLoad() {
		this.soldadorProvider.getAll().then((result) => {
			this.soldadorList = result;
		});
	}

	addSoldador() {
		this.navCtrl.setRoot("SoldadorEditPage");
	}

	editarSoldador(item: SoldadorElement) {
		this.navCtrl.push("SoldadorEditPage",
			{ key: item.key, soldador: item.soldador });
	}

	loginGoogle() {

		this.googlePlus.login({})
			.then(res => {
				this.user.id = res.userId;
				this.user.email = res.email;
				this.user.name = res.displayName;
				this.user.image = res.imageUrl;
			})
			.catch(err => {
				this.alertPresent();
			});
	}

	loginFacebook(){
		this.facebook.login(['email'])
			.then(response => {
				const facebookCredential = firebase.auth.FacebookAuthProvider
					.credential(response.authResponse.accessToken);

				firebase.auth().signInWithCredential(facebookCredential)
					.then(success => {
						this.user.id = '';
						this.user.name = '';
						this.user.email = '';
						this.user.image = '';

						console.log(this.user);
						console.log("Firebase success: " + JSON.stringify(success));
					});

			}).catch((err) => {
				this.alertPresent();
				console.log(err);
			});
	}

	logout() {
		this.afAuth.auth.signOut();
		this.googlePlus.logout();
		this.user = {};
	}

	removerSoldador(item: SoldadorElement) {
		this.soldadorProvider.remove(item.key)
			.then(() => {
				// Removendo do array de items
				let index = this.soldadorList.indexOf(item);
				this.soldadorList.splice(index, 1);
				this.toast.create({ message: 'Soldador removido.', duration: 3000, position: 'botton' }).present();
			})
	}

	alertPresent() {
		this.alertCtrl.create({
			title: 'Aviso',
			message: 'Não foi possivel o efetuar o login. Por favor, verifique sua conexão e tente novamente..',
			buttons: ['Ok']
		}).present();
	}


}
