import { Http, Jsonp } from '@angular/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Inspecao } from '../../models/inspecao';
import { InspecaoProvider } from '../providers';

declare var cordova: any;

@Injectable()
export class DatabaseProvider {

  urlBase = 'https://ionic-login-235214.firebaseio.com/'


  constructor(private inspecaostorage: InspecaoProvider,
    public http: Http, public jsonp: Jsonp) { }

  getInspecoes() {
    return new Promise(resolve => {
      this.http.get(`${this.urlBase}inspecoes.json`)
        .subscribe(res => resolve(res.json()))
    })
  }

  async saveInspecao(item: Inspecao) {

    item.urlImage = await this.uploadImage(item.foto,item.key);
    console.log('save inspecao: ', item.urlImage)

    if (!item.urlImage) {
      return;
    }

    await firebase.database().ref('inspecoes').push({
      urlImage: item.urlImage,
      dataInspecao: item.dataInspecao,
      soldador: item.soldador,
      inspetor: item.inspetor,
      foto: item.foto,
      aprovado: item.aprovado,
      //dataAprovado: item.dataAprovado,
      mordedura: item.mordedura,
      poros: item.poros,
      trinca: item.trinca,
      cordaoFino: item.cordaoFino,
      faltaFusao: item.faltaFusao,
      cordaoLargo: item.cordaoLargo,
      respingo: item.respingo,
      desalinhamento: item.desalinhamento,
      faltaPenetracao: item.faltaPenetracao
    }).then(res => {
      this.inspecaostorage.delete(item.key)
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })
    }).catch(err => { console.log(err) })

  }

  async uploadImage(image,key) {
    
    return await new Promise<any>(() => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child(key);
 
      imageRef.putString(cordova.file.dataDirectory + image)
        .then(snapshot => {
          return Promise.resolve(snapshot.downloadURL);
        }, err => {
          return Promise.reject(err);
        })
      })
   
  }
}
