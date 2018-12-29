import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Inspecao } from '../../models/inspecao'

import { SoldadorProvider } from '../../providers/soldador/soldador'

import { SoldadorElement } from '../../models/soldador'

/**
 * Generated class for the InspecaoEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-inspecao-edit',
  templateUrl: 'inspecao-edit.html',
})
export class InspecaoEditPage {

	item: Inspecao;
	soldadorList: SoldadorElement[]
	showNewPhoto: boolean;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public soldadorProvider: SoldadorProvider
		) {
  		this.item = navParams.get('item')?navParams.get('item'):navParams.get('inspecao');
		this.showNewPhoto = navParams.get('inspecao')? true : false;
		
		this.soldadorProvider.getAll().then((result)=>{
  			this.soldadorList = result;
  		});

	}

	inspecao() {
    	this.navCtrl.pop();
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

	public pathForImage(img) {
      if (img === null) {
        return '';
      } else {
        return cordova.file.dataDirectory + img;
      }
    }

}
