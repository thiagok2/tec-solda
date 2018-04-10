import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


import { Item } from '../../models/item';
import { Inspecao } from '../../models/inspecao';

import { Items } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-inspecao-list',
  templateUrl: 'inspecao-list.html',
})
export class InspecaoListPage {

  inspecaoItems: Inspecao[];

	currentItems: Item[];

  	constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items, public modalCtrl: ModalController) {
  		 this.currentItems = this.items.query();
  	}

  	abrirDetalhes(item){
  		this.navCtrl.push('InspecaoEditPage', {
    		item: item
        });
  	}

    novaInspecao(){
      this.navCtrl.push('InspecaoNewPage');
    }

}
