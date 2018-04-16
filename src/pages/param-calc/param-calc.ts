import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController   } from 'ionic-angular';

import {ParamsCalc} from '../../models/param-calc'

import {EspecProcesso} from '../../models/espec-processo'


/**
 * Generated class for the ParamCalcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-param-calc',
  templateUrl: 'param-calc.html',
})
export class ParamCalcPage {

  titulo: string;
  subtitulo: string;

	posicao: string;
	indexPosicao:number;

  hasSelectNumPasse: boolean;
  hasNumPasse: boolean;
  hasNumPerna: boolean;

	espessurasArray: number[];
	passesArray: number[];

	paramsCalc: ParamsCalc;
	especificaoProcesso: EspecProcesso;

	showResultados: boolean = false;

	constructor(public navCtrl: NavController, 
		public navParams: NavParams,
    public alertCtrl: AlertController,
		public toastCtrl: ToastController) {

  		this.posicao = navParams.get('posicao');
  		this.indexPosicao = navParams.get('index_posicao');
  		this.hasSelectNumPasse = navParams.get('select_num_passe');
  		this.hasNumPasse = navParams.get('num_passe');
  		this.hasNumPerna = navParams.get('num_perna');

      this.titulo = navParams.get('titulo');
      this.subtitulo = navParams.get('subtitulo');

      console.log(this.titulo + ' - ' +this.subtitulo);

  		this.paramsCalc = new ParamsCalc(this.posicao, this.hasSelectNumPasse, this.hasNumPasse, this.hasNumPerna);

  		this.espessurasArray = this.paramsCalc.getEspessuras(this.indexPosicao);
  		this.passesArray = (this.hasSelectNumPasse) ? this.paramsCalc.getPasses(this.indexPosicao):[];
  }


  calcular(){
	  //this.presentLoading();
		this.showResultados = true;

		this.especificaoProcesso = new EspecProcesso(this.paramsCalc);

    if(this.especificaoProcesso.calculado)
		  this.presentToast();
    else
      this.mensagemIndisponivel();
		//console.log('especificacao:::'+JSON.stringify(this.especificaoProcesso));
	}

	eventSelectEspessura(event: any){
		this.calcular();
	}


	presentToast() {
  	let toast = this.toastCtrl.create({
    		message: 'Calculo realizado para espessura: '+  this.paramsCalc.espessura+' mm',
    		duration: 4000,
    		position: 'top'
  	});
  	toast.present();
	}

  mensagemIndisponivel(){
     let alert = this.alertCtrl.create({
      title: 'Cálculo Indisponível',
      subTitle: 'Desculpas! O cálculo ainda não está disponível.',
      buttons: ['OK']
    });
    alert.present();
  }

}
