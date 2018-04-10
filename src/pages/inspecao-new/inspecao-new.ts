import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { Item } from '../../models/item'
import { Inspecao } from '../../models/inspecao'

/**
 * Generated class for the InspecaoNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inspecao-new',
  templateUrl: 'inspecao-new.html',
})
export class InspecaoNewPage {

	/**
   * Declarando a variável onde será adicionado o base64 da foto
   */
	currentPhoto;

  	constructor(
  			public navCtrl: NavController, 
  			public navParams: NavParams,
  			public camera : Camera) {
  	}

  	
  	getPhoto(type){

   		const options: CameraOptions = {
    		quality: 100,
      		destinationType: this.camera.DestinationType.DATA_URL,
      		encodingType: this.camera.EncodingType.JPEG,
      		mediaType:this.camera.MediaType.PICTURE,
      		sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      		correctOrientation: true
    	};

    	this.camera.getPicture(options).then((imageData) => {

    	this.currentPhoto = 'data:image/jpeg;base64,' + imageData;

    	}, (err) => {
      // Handle error
    	});
 	 }

 	 avancar(){

 	 	let novaInspecao = new Inspecao();

 	 	novaInspecao.foto = this.currentPhoto;
 	 	this.navCtrl.push('InspecaoEditPage',{
 	 		inspecao: novaInspecao
 	 	})
 	 }

}
