import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { InspecaoElement } from '../../models/inspecao';

import { InspecaoProvider } from '../../providers/providers';

declare var cordova: any;

@IonicPage()
@Component({
	selector: 'page-inspecao-list',
	templateUrl: 'inspecao-list.html',
})
export class InspecaoListPage {

	public currentItems: InspecaoElement[];

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public items: InspecaoProvider,
		public modalCtrl: ModalController) { }

	ionViewDidLoad() {
		this.items.getAll().then((result) => {
			this.currentItems = result;
		});
	}

	abrirDetalhes(inspecao: InspecaoElement) {
		this.navCtrl.push('InspecaoEditPage', {
			item: inspecao,
		});
	}

	pathForImage(img) {
		return cordova.file.dataDirectory + img;
	}

	novaInspecao() {
		this.navCtrl.setRoot('InspecaoNewPage');
	}

	retornaIcones(icon: boolean) {
		return icon ? "checkmark" : "close";
	}
}
