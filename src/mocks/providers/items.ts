import { Injectable } from '@angular/core';

import { Inspecao } from '../../models/inspecao';

@Injectable()
export class Items {
  
  items: Inspecao[] = [];

  constructor() { }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Inspecao) {
    this.items.push(item);
  }

  delete(item: Inspecao) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  update(item: Inspecao){
    this.items.forEach((i)=>{
      if(i.foto == item.foto){
        this.delete(i);
        this.add(item);
      }
    })
  }
}
