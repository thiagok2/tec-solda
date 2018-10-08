import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProcessosTig } from '../../models/processosTig';
import { OpcoesSelecaoTig } from '../../providers/processo-tig/opcoes-processo-tig';

@IonicPage()
@Component({
  selector: 'page-param-calc-tig',
  templateUrl: 'param-calc-tig.html',
})
export class ParamCalcTigPage {

  public paramProcesso : ProcessosTig;
  public espessuras;
  public juntasAcoInoxidavel;
  public juntasParaAluminio;
  public posicoesSoldagem;

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.paramProcesso = {
      id : this.navParams.get('id'),
      titulo : this.navParams.get('titulo'),
      subtitulo : this.navParams.get('subtitulo')
    };
    
  }

  exibirParametrosParaSelecão(){
    let opcoesSelecaoTig = new OpcoesSelecaoTig;
    this.espessuras = opcoesSelecaoTig.retornarEspessuras(this.paramProcesso.id);
  }
  
  ionViewDidLoad() {
    this.exibirParametrosParaSelecão();  
  }

  

}
