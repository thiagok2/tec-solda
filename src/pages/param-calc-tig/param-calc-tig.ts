import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TigProcesso } from '../../models/TigProcesso';
import { TigProcessoProvider } from '../../providers/tig-processo/tig-processo-provider';
import { TigOpcoesProvider } from '../../providers/tig-processo/tig-opcoes-provider';

@IonicPage()
@Component({
  selector: 'page-param-calc-tig',
  templateUrl: 'param-calc-tig.html',
})
export class ParamCalcTigPage {

  public paramCalcular: TigProcesso;
  public calcResultado: TigProcessoProvider;
  public showResultado: Boolean = false;
  public espessuras;
  public juntasAcoInoxidavel;
  public juntasParaAluminio;
  public posicoesSoldagem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.paramCalcular = {
      id: this.navParams.get('id'),
      titulo: this.navParams.get('titulo'),
      subtitulo: this.navParams.get('subtitulo'),
      espessuraAproximada: undefined,
      posicaoSoldagem: undefined,
      tipoJunta: undefined
    };
  }

  exibirParametrosParaSelecão() {
    let opcoesSelecaoTig = new TigOpcoesProvider();
    if (this.paramCalcular.id == 'acoInoxidavel') {
      this.juntasAcoInoxidavel = opcoesSelecaoTig.TIPO_JUNTA_ACO_INOXIDAVEL;
    }
    if (this.paramCalcular.id == 'aluminioCorrenteAlternada') {
      this.posicoesSoldagem = opcoesSelecaoTig.POSICAO_SOLDAGEM;
    }
    if (this.paramCalcular.id == 'aluminioCorrenteContinua') {
      this.juntasParaAluminio = opcoesSelecaoTig.TIPO_JUNTA_ALUMINIO_CORRENTE_CONTINUA;
    }
    this.espessuras = opcoesSelecaoTig.retornarEspessuras(this.paramCalcular.id);
  }

  ionViewDidLoad() {
    this.exibirParametrosParaSelecão();
  }

  eventSelectEspessura(event: any) {
    this.calcular();
  }


  calcular() {
    this.showResultado = true;
    this.calcResultado = new TigProcessoProvider(this.paramCalcular);
  }


}
