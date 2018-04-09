import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CalculoSoldagemPage } from '../calculo-soldagem/calculo-soldagem';

/**
 * Generated class for the PosicoesEletrodoRevestidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posicoes-eletrodo-revestido',
  templateUrl: 'posicoes-eletrodo-revestido.html',
})
export class PosicoesEletrodoRevestidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PosicoesEletrodoRevestidoPage');
  }

  posicaoPlanaReto(){
  	this.navCtrl.push('ParamCalcPage', {
    	index_posicao: 1,
      posicao: "posicaoPlanaReto",
    	select_num_passe: false,
    	num_passe: true,
    	num_perna: false
    });
  }

  posicaoPlanaV(){
  	this.navCtrl.push('ParamCalcPage', {
      index_posicao: 2,
    	posicao: "posicaoPlanaV",
    	select_num_passe: true,
    	num_passe: false,
    	num_perna: false
    });

  }

  posicaoPlanaHorizontal(){
  	this.navCtrl.push('ParamCalcPage', {
      index_posicao: 3,
    	posicao: "posicaoPlanaHorizontal",
    	select_num_passe: false,
    	num_passe: true,
    	num_perna: false
    });
  }

  posicaoPlanaAngulo(){
  	this.navCtrl.push('ParamCalcPage', {
      index_posicao: 4,
    	posicao: "posicaoPlanaAngulo",
    	select_num_passe: false,
    	num_passe: true,
    	num_perna: true
    });
  }

  soldagemDeTopo(){
  	this.navCtrl.push('ParamCalcPage', {
      index_posicao: 5,
    	posicao: "soldagemDeTopo",
    	select_num_passe: false,
    	num_passe: true,
    	num_perna: false
    });
  }

  soldagemDeTopoV(){
  	this.navCtrl.push('ParamCalcPage', {
      index_posicao: 6,
    	posicao: "soldagemDeTopoV",
    	select_num_passe: true,
    	num_passe: false,
    	num_perna: false
    });
  }

  soldagemEmAngulo(){
	this.navCtrl.push('ParamCalcPage', {
      index_posicao: 7,
    	posicao: "soldagemEmAngulo",
    	select_num_passe: false,
    	num_passe: true,
    	num_perna: true
    });
  }

}
