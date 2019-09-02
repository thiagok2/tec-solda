import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';

import { Inspecao } from '../../models/inspecao'

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
    public camera: Camera,
    private file: File, private filePath: FilePath,
    public toastCtrl: ToastController, public platform: Platform) {
  }


  getPhoto(type) {

    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {

      this.currentPhoto = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      // Handle error
    });
  }

  takePhoto(type) {
    let sourceType = type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY;

    let options = {
      quality: 50,
      sourceType: sourceType,
      saveToPhotoAlbum: true,
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
      } else {
        let currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        let correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }

    }, (err) => {
      this.presentToast('Problema ao selecionar imagem.');
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
    let d = new Date(),
      n = d.getTime(),
      newFileName = 'inspecao_' + n + ".jpg";
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

  avancar() {

    let novaInspecao = new Inspecao({});

    //novaInspecao.foto = this.currentPhoto;
    novaInspecao.foto = this.currentPhoto != null ? this.currentPhoto : this.lastImage;


    let toast = this.toastCtrl.create({
      message: novaInspecao.foto,
      duration: 3000,
      position: 'top'
    });
    toast.present();


    this.navCtrl.push('InspecaoEditPage', {
      inspecao: novaInspecao
    })
  }

  voltar() {
    this.navCtrl.setRoot('InspecaoListPage');
  }

}
