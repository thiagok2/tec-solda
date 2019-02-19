import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Inspecao } from '../../models/inspecao'
import { SoldadorProvider } from '../../providers/soldador/soldador'
import { SoldadorElement } from '../../models/soldador'
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
		private items: InspecaoProvider) {

		this.newInspection = navParams.get('inspecao') ? true : false;
		this.item = this.newInspection ? navParams.get('inspecao') : navParams.get('item');
		if (navParams.get('key')) { this.key = navParams.get('key') };

	}

	ionViewDidLoad() {
		this.soldadorProvider.getSoldadores().then((result) => {
			this.soldadorList = result;
		});
		this.soldadorProvider.getInspetores().then((result) => {
			this.inspetorList = result;
		});
	}

	inspecao() {
		this.navCtrl.pop();
	}

	salvar() {
		this.newInspection ? this.items.insert(this.item): this.items.update(this.item);
		this.navCtrl.push('InspecaoListPage');
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

}
