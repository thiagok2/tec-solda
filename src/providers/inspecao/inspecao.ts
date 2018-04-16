//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {Items} from '../../mocks/providers/items'

import { Api } from '../api/api';


@Injectable()
export class InspecaoProvider {


	items: Items;

	constructor(public api: Api) { }

	query(params?: any) {
    	return this.api.get('/items', params);
  	}


}
