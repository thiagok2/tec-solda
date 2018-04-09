import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProcessosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-processos',
  templateUrl: 'processos.html',
})
export class ProcessosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcessosPage');
  }


  eletrodoRevestido(){
  	this.navCtrl.push('EletrodoRevestidoPage');

  }

  migMag(){
  	this.navCtrl.push('MigMagPage');

  }

  tig(){
  	this.navCtrl.push('TigPage');

  }


}
