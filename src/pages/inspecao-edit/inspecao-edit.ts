import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item'
import { Inspecao } from '../../models/inspecao'

/**
 * Generated class for the InspecaoEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inspecao-edit',
  templateUrl: 'inspecao-edit.html',
})
export class InspecaoEditPage {


	item: Item;
	itemInspecao: Inspecao;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.item = navParams.get('item');

  		if(navParams.get('inspecao'))
  			this.item = navParams.get('inspecao');


	}

	inspecao() {
    	this.navCtrl.push('InspecaoListPage');
	}

	salvar() {
    	console.log(this.item);
    	this.navCtrl.push('InspecaoListPage');

	}

	aprovar(){
		this.item.aprovado = true;
	}


	reprovar(){
		this.item.aprovado = false;
	}

}
