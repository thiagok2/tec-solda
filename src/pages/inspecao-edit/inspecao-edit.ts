import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Inspecao } from '../../models/inspecao';
import { SoldadorProvider } from '../../providers/soldador/soldador';
import { SoldadorElement } from '../../models/soldador';
import { InspecaoProvider } from '../../providers/providers';


declare var cordova: any;

@IonicPage()
@Component({
	selector: 'page-inspecao-edit',
	templateUrl: 'inspecao-edit.html',
})
export class InspecaoEditPage {


	public item: Inspecao;
	public soldadorList: SoldadorElement[];
	public newInspection: boolean;
	public inspetorList: SoldadorElement[];
	public key: string;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public soldadorProvider: SoldadorProvider,
		private items: InspecaoProvider,
		public alertCtrl: AlertController) {

		this.newInspection = navParams.get('inspecao') ? true : false;
		this.item = this.newInspection ? navParams.get('inspecao') : navParams.get('item');
		if (navParams.get('key')) { this.key = navParams.get('key') };
	}

	ionViewDidLoad() {
		this.getListSoldador();
		this.getListInspetor();
	}

	async getListInspetor() {
		await this.soldadorProvider.getInspetores().then((result) => {
			this.inspetorList = result;
		});
	}

	async getListSoldador() {
		await this.soldadorProvider.getSoldadores().then((result) => {
			this.soldadorList = result;
		});
	}

	returnForPageInspecaoNew() {
		this.navCtrl.pop();
	}

	salvar() {
		this.newInspection ? this.saveInspecao() : this.updateInspecao();
		this.goForInspecaoListPage();
	}

	goForInspecaoListPage() {
		this.navCtrl.setRoot('InspecaoListPage');
	}

	private saveInspecao() {
		this.items.insert(this.item);
	}

	private updateInspecao() {
		this.items.update(this.item);
	}

	aprovar() {
		this.item.aprovado = true;
	}

	reprovar() {
		this.item.aprovado = false;
	}

	public pathForImage(img) {
		return cordova.file.dataDirectory + img;
	}

	showAlert(message) {
		this.alertCtrl.create({
			title: 'Aviso',
			message: message,
			buttons: ['Ok']
		}).present();
	}

}
