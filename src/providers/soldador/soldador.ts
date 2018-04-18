import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { Soldador, SoldadorElement } from '../../models/soldador'



/*
  Generated class for the SoldadorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SoldadorProvider {

  constructor(private storage: Storage) {
    
  }

  public insert(soldador: Soldador){
  	var d = new Date();
  	var s = d.getTime();
  	let key = 'pessoa_'+s;

    soldador.dataCadastro = new Date();

  	return this.save(key, soldador);
  }

  public update(key: string, soldador: Soldador){
  	return this.save(key, soldador);
  }

  private save(key: string, soldador: Soldador){
  	return this.storage.set(key, soldador);
  }

  public remove(key: string){
  	return this.storage.remove(key);
  }

  public getAll(){
  	let soldadores: SoldadorElement[] = [];

  	return this.storage.forEach((value: Soldador, key: string, interationNumber: number) =>{
  		if(key.startsWith('pessoa')){
  			let element = new SoldadorElement();
  			element.key = key;
  			element.soldador = value;

  			soldadores.push(element);
  		} 
  	}).then( () => {
  		return Promise.resolve(soldadores);
  	}).catch((error) => {
  		return Promise.reject(error);
  	});
  }

  public getInspetores(){
    let equipe: SoldadorElement[];

    let inspetores: SoldadorElement[] = [];

    this.getAll().then((result) =>{
      equipe = result;
    });

    equipe.forEach(function (p){
      if(p.soldador.inspetor)
        inspetores.push(p);
    });

    return inspetores;
    
  }
}
