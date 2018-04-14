import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tig',
  templateUrl: 'tig.html',
})
export class TigPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TigPage');
  }

  avancar(){
  	this.navCtrl.push('ModalEmBrevePage');
  }

  voltar(){
    this.navCtrl.push('ProcessosPage');
  }
}
