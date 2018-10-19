import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParamCalcTigPage } from '../param-calc-tig/param-calc-tig';
import { TigProcesso } from '../../models/TigProcesso';

@IonicPage()
@Component({
  selector: 'page-posicoes-materiais-tig',
  templateUrl: 'posicoes-materiais-tig.html',
})
export class PosicoesMateriaisTigPage {

  public tigProcesso: TigProcesso[];
  public paramAcoCarbono = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    this.tigProcesso = [{
      id : 'acoCarbono',
      titulo: 'Aço Carbono',
      subtitulo: 'Soldagem de aço carbono',
      imagem: 'assets/img/posicoes/posicao-plana_reta.png',
      
    }, {
      id : 'acoInoxidavel',
      titulo: 'Aço Inoxidável',
      subtitulo: 'Soldagem de aço inoxidável⁽²⁾',
      imagem: 'assets/img/posicoes/posicao-plana_reta.png',
      
    }, {
      id : 'aluminioCorrenteAlternada',
      titulo: 'Alumínio : Corrente Alternada⁽¹⁰⁾',
      subtitulo: 'Soldagem de alumínio e sua ligas em corrente alternada⁽¹⁰⁾',
      imagem: 'assets/img/posicoes/posicao-plana_reta.png',
      
    }, {
      id : 'aluminioCorrenteContinua',
      titulo: 'Alumínio : Corrente Contínua⁽¹⁰⁾',
      subtitulo: 'Soldagem de alumínio e suas ligas e corrente continua polaridade direta na posição plana ⁽¹⁰⁾',
      imagem: 'assets/img/posicoes/posicao-plana_reta.png',
      
    }];
  }

  selecionadoProcessoCalc(processo) {
    this.navCtrl.push(ParamCalcTigPage.name,{
      id : processo.id,
      titulo : processo.titulo,
      subtitulo : processo.subtitulo
    });
  }
}
