import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


import { SoldadorProvider } from '../../providers/soldador/soldador'
import { Soldador } from '../../models/soldador'
import { SoldadorListPage } from '../soldador-list/soldador-list';

@IonicPage()
@Component({
  selector: 'page-soldador-edit',
  templateUrl: 'soldador-edit.html',
})
export class SoldadorEditPage {

	soldador: Soldador;
  	key: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		public toast: ToastController,
  		private soldadorProvider: SoldadorProvider) {

  		if (this.navParams.data.soldador && this.navParams.data.key) {
      		this.soldador = this.navParams.data.soldador;
      		this.key =  this.navParams.data.key;
    	} else {
      		this.soldador = new Soldador();
    	}

  }

  salvar(){
  	this.salvarSoldador().then(()=>{
  		let msg = 'Soldador salvo.';
		  this.showToast(msg);
		  this.navCtrl.setRoot(SoldadorListPage.name);
  	}).catch(() => {
		let msg = 'Erro ao salvar o soldador.';
  		this.showToast(msg);
  	});
  }
  
  showToast(message){
	  this.toast.create({
		  message: message,
		  duration: 3000,
		  position: 'botton'
	  }).present();
  }

  private salvarSoldador(){
  	if(this.key){
  		return this.soldadorProvider.update(this.key, this.soldador);
  	}else{
  		return this.soldadorProvider.insert(this.soldador);
  	}
  }

}
