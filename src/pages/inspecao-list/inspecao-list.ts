import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { Inspecao } from '../../models/inspecao';

import { Items } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-inspecao-list',
  templateUrl: 'inspecao-list.html',
})
export class InspecaoListPage {

	currentItems: Inspecao[];

	constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items, public modalCtrl: ModalController) {
		 this.currentItems = this.items.query();
	}

	abrirDetalhes(inspecao){
		this.navCtrl.push('InspecaoEditPage', {
  		item: inspecao
      });
	}

  novaInspecao(){
    this.navCtrl.push('InspecaoNewPage');
  }

}
