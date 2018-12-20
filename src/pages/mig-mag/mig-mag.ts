import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MigMagPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mig-mag',
  templateUrl: 'mig-mag.html',
})
export class MigMagPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  avancar(){
  	this.navCtrl.push('ModalEmBrevePage');
  }

}
