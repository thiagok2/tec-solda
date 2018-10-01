import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProcessosTig } from '../../models/processosTig';

@IonicPage()
@Component({
  selector: 'page-param-calc-tig',
  templateUrl: 'param-calc-tig.html',
})
export class ParamCalcTigPage {

  public paramProcesso : ProcessosTig;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.paramProcesso = this.navParams.get('processo');
  }

  ionViewDidLoad() {
    
  }

}
