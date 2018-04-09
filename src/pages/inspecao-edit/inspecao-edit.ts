import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item'

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

	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.item = navParams.get('item');
	}

	ionViewDidLoad() {
    
	}

}
