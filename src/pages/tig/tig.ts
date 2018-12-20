import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tig',
  templateUrl: 'tig.html',
})
export class TigPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  avancar(){
  	this.navCtrl.push('PosicoesMateriaisTigPage');
  }

}
