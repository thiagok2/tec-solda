import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { SoldadorElement } from '../../models/soldador'

import { SoldadorProvider } from '../../providers/soldador/soldador'

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

@IonicPage()
@Component({
	selector: 'page-soldador-list',
	templateUrl: 'soldador-list.html',
})
export class SoldadorListPage {
	displayName;
	soldadorList: SoldadorElement[] = [];
	user: any = {}

	constructor(
		private googlePlus: GooglePlus,
		private fb: Facebook,
		private afAuth: AngularFireAuth,
		private platform: Platform,
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
		this.navCtrl.push("SoldadorEditPage");
	}

	editarSoldador(item: SoldadorElement) {
		this.navCtrl.push("SoldadorEditPage",
			{ key: item.key, soldador: item.soldador });
	}

	loginGoogle() {
		console.log('login google');
		this.googlePlus.login({})
			.then(res => {
				this.user = res;
				console.log(res);
			})
			.catch(err => console.error(err));
	}

	loginFacebook() {
		console.log('login com facebook');
		if (this.platform.is('cordova')) {
			return this.fb.login(['email', 'public_profile']).then(res => {
				const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
				return firebase.auth().signInWithCredential(facebookCredential);
			})
		} else {
			return this.afAuth.auth
				.signInWithPopup(new firebase.auth.FacebookAuthProvider())
				.then(res => console.log(res));
		}
	}

	getData(){
		let token = this.user.token;
	}
	
	logout() {
		this.afAuth.auth.signOut();
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
	

}
