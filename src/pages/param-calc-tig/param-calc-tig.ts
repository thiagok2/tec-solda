import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
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
  public showResultado: Boolean;
  public espessuras;
  public juntasParaAluminio;
  public posicoesSoldagem;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController) {

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
    this.calcResultado = new TigProcessoProvider(this.paramCalcular);
    this.showResultado = this.calcResultado.getCalculado();

    if (this.paramCalcular.espessuraAproximada && 
      (this.paramCalcular.posicaoSoldagem || this.paramCalcular.tipoJunta)) {
        
      if (this.showResultado) {
        this.presentToast();
      } else {
        this.mensagemIndisponivel();
      }
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Calculo realizado para espessura: ' + this.paramCalcular.espessuraAproximada + ' mm',
      duration: 4000,
      position: 'top'
    });
    toast.present();
  }

  mensagemIndisponivel() {
    let alert = this.alertCtrl.create({
      title: 'Cálculo Indisponível',
      subTitle: 'Não foi possivel realizar o cálculo com os parâmetros selecionados.',
      buttons: ['OK']
    });
    alert.present();
  }




}
