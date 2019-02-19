//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

//import { Api } from '../api/api';
import { Inspecao, InspecaoElement } from '../../models/inspecao';

@Injectable()
export class InspecaoProvider {

	items: Inspecao[] = [];

	constructor(private storage: Storage) { }

	public insert(i: Inspecao) {
		let d = new Date();
		let s = d.getTime();
		let key = 'inspecao_'+s;
		i.key = key;

		return this.save(i);
	}

	private save(i: Inspecao) {
		return this.storage.set(i.key,i);
	}

	public update(i: Inspecao) {
		return this.save(i);
	}

	public delete(key: string) {
		return this.storage.remove(key)
	}

	public getAll() {
		let inspecoes: InspecaoElement[] = [];
		
		this.storage.keys()
		.then((keys: string[])=>{
			keys.forEach((key: string)=>{
				if(key.startsWith('inspecao')){
					this.storage.get(key).then((result)=>{
						inspecoes.push(result);
					});
				}
			});
			
		});
		return Promise.resolve(inspecoes);
	}
		/*
		return this.storage.forEach((value: Inspecao, key: string) => {
			if (key.startsWith('inspecao')) {
				let elemento: InspecaoElement;
				elemento.key = key;
				elemento.inspecao = value;
				inspecoes.push(elemento);
			}
		}).then(() => {
			return Promise.resolve(inspecoes);
		}).catch((err) => {
			return Promise.reject(err);
		});*/
	
}
