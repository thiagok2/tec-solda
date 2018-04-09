//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {Items} from '../../mocks/providers/items'

import { Api } from '../api/api';

/*
  Generated class for the InspecaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InspecaoProvider {


	items: Items;

	constructor(public api: Api) { }

	query(params?: any) {
    	return this.api.get('/items', params);
  	}


}
