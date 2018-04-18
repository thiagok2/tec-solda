import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Inspecao } from '../../models/inspecao'

import { SoldadorProvider } from '../../providers/soldador/soldador'

import { Soldador, SoldadorElement } from '../../models/soldador'

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

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public soldadorProvider: SoldadorProvider
		) {

  		this.item = navParams.get('item');
  		this.soldadorProvider.getAll().then((result)=>{
  			this.soldadorList = result;

  			console.log('soldadores::'+this.soldadorList);
  		});

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

	public pathForImage(img) {
      if (img === null) {
        return '';
      } else {
        return cordova.file.dataDirectory + img;
      }
    }

}
