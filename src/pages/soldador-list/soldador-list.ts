import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { SoldadorElement } from '../../models/soldador';
import { SoldadorProvider } from '../../providers/soldador/soldador';

@IonicPage()
@Component({
	selector: 'page-soldador-list',
	templateUrl: 'soldador-list.html',
})
export class SoldadorListPage {
	soldadorList: SoldadorElement[] = [];

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private soldadorProvider: SoldadorProvider,
		private toast: ToastController) {
	
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
