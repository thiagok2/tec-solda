import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  
  items: Item[] = [];

  defaultItem: any = {
    "name": "Nova Inspeção",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Registre uma nova inspeção e detalhe as ocorrências.",
  };


  constructor() {
    let items = [
      {
        "foto": "assets/img/inspecao/metal1.jpg",
        "dataInspecao": "01/01/2019",
        "dataAprovado": "01/01/2019",
        "resumo": "Mordedura; Poros; Trinca; Cordão Fino; Falta de Fusão; Cordão Largo; Respingo; Desalinhamento; Falta de Penetração",
        "aprovado": true,
        "soldador": "Evert T.",
        "inspetor": "Eng. Eduardo M.",
        "mordedura": true,
        "poros": true,
        "trinca": true,
        "cordaoFino": true,
        "faltaFusao": true,
        "cordaoLargo": true,
        "respingo": true,
        "desalinhamento": true,
        "faltaPenetracao": true
      },
      {
        "foto": "assets/img/inspecao/metal2.jpg",
        "dataInspecao": "02/01/2019",
        "dataAprovado": "02/01/2019",
        "resumo": "Mordedura; Poros; Trinca; Cordão Fino; Falta de Fusão; Cordão Largo; Respingo; Desalinhamento; Falta de Penetração",
        "aprovado": false,
        "soldador": "Evert T.",
        "inspetor": "Eng. Eduardo M.",
        "mordedura": true,
        "poros": true,
        "trinca": false,
        "cordaoFino": true,
        "faltaFusao": true,
        "cordaoLargo": true,
        "respingo": true,
        "desalinhamento": true,
        "faltaPenetracao": true
      },
      {
        "foto": "assets/img/inspecao/metal3.jpg",
        "dataInspecao": "03/01/2019",
        "dataAprovado": "03/01/2019",
        "resumo": "Mordedura; Poros; Trinca; Cordão Fino; Falta de Fusão; Cordão Largo;",
        "aprovado": false,
        "soldador": "Evert T.",
        "inspetor": "Eng. Eduardo M.",
        "mordedura": true,
        "poros": true,
        "trinca": false,
        "cordaoFino": true,
        "faltaFusao": true,
        "cordaoLargo": true
      },
      {
        "foto": "assets/img/inspecao/metal4.jpg",
        "dataInspecao": "04/01/2019",
        "dataAprovado": "04/01/2019",
        "resumo": "Mordedura; Poros; Falta de Penetração",
        "aprovado": true,
        "soldador": "Evert T.",
        "inspetor": "Eng. Eduardo M.",
        "mordedura": true,
        "poros": true,
        "trinca": false,
        "cordaoFino": false,
        "faltaFusao": false,
        "cordaoLargo": false,
        "respingo": false,
        "desalinhamento": false,
        "faltaPenetracao": true
      },
      {
        "foto": "assets/img/inspecao/metal5.jpg",
        "dataInspecao": "05/01/2019",
        "dataAprovado": "05/01/2019",
        "resumo": "Mordedura; Poros; Cordão Largo; Respingo; Desalinhamento; Falta de Penetração",
        "aprovado": true,
        "soldador": "Evert T.",
        "inspetor": "Eng. Eduardo M.",
        "mordedura": true,
        "poros": true,
        "trinca": false,
        "cordaoFino": false,
        "faltaFusao": false,
        "cordaoLargo": true,
        "respingo": false,
        "desalinhamento": true,
        "faltaPenetracao": true
      },
      {
        "foto": "assets/img/inspecao/metal6.jpg",
        "dataInspecao": "06/01/2019",
        "dataAprovado": "06/01/2019",
        "resumo": "Mordedura",
        "aprovado": true,
        "soldador": "Evert T.",
        "inspetor": "Eng. Eduardo M.",
        "mordedura": true,
        "poros": false,
        "trinca": false,
        "cordaoFino": false,
        "faltaFusao": false,
        "cordaoLargo": false,
        "respingo": false,
        "desalinhamento": false,
        "faltaPenetracao": false
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

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

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
