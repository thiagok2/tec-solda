import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';

import { Item } from '../../models/item'
import { Inspecao } from '../../models/inspecao'


/**
 * Generated class for the InspecaoNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova: any;
 

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


    lastImage: string = null;

  	constructor(
  			public navCtrl: NavController, 
  			public navParams: NavParams,
  			public camera : Camera,
        private transfer: Transfer, private file: File, private filePath: FilePath,
        public toastCtrl: ToastController, public platform: Platform) {
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

    takePhoto(type){

      let sourceType = type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
      
      var options = {
          quality: 100,
          sourceType: sourceType,
          saveToPhotoAlbum: false,
          correctOrientation: true
      };

      this.camera.getPicture(options).then((imagePath) => {
        if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath)
            .then(filePath => {
              let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
              let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
              this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            });
        }else {
          var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }

      }, (err) => {
        this.presentToast('Error while selecting image.');
      });
    }

    private presentToast(text) {
      let toast = this.toastCtrl.create({
        message: text,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }

    // Create a new name for the image
    private createFileName() {
      var d = new Date(),
      n = d.getTime(),
      newFileName =  'inspecao_'+n + ".jpg";
      return newFileName;
    }
     
    // Copy the image to a local folder
    private copyFileToLocalDir(namePath, currentName, newFileName) {
      this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
        this.lastImage = newFileName;
        this.presentToast('Imagem salva com sucesso.');
      }, error => {
        this.presentToast('Erro ao gravar imagem.');
      });
    }

    public pathForImage(img) {
      if (img === null) {
        return '';
      } else {
        return cordova.file.dataDirectory + img;
      }
    }

 	  avancar(){

   	 	let novaInspecao = new Inspecao();

   	 	novaInspecao.foto = this.currentPhoto;
   	 	this.navCtrl.push('InspecaoEditPage',{
   	 		inspecao: novaInspecao
   	 	})
   	}

    voltar(){
      this.navCtrl.push('InspecaoListPage');
    }

}
