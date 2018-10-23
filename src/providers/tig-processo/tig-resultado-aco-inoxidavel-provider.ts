import { TigResultado } from "../../models/TigResultado";

export class TigResultadoAcoInoxidavelProvider {

    private _acoInoxidavelValores = new Map();
    private _tigResutados: TigResultado;

    constructor() {
        this.defineObjetoAcoInoxidavelValores();
    }

    getValorAcoInoxidavel(especura, tipoJunta) {
        let chave = especura + '&' + tipoJunta;
        this._tigResutados = this._acoInoxidavelValores.get(chave);
        return this._tigResutados;
    }

    defineObjetoAcoInoxidavelValores() {

        this._acoInoxidavelValores.set('0.6&Sem Chanfro Sem Abertura', {
            tipoJunta: '1',
            diametroAdicao: '15 - 25',
            corrente: '3',
            vazaoArgonio: '1',
            numPasses: '30 - 40'
        });
        this._acoInoxidavelValores.set('0.8&Sem Chanfro Sem Abertura', {
            tipoJunta: '1',
            diametroAdicao: '15 - 30',
            corrente: '3',
            vazaoArgonio: '1',
            numPasses: '30 - 40'
        });
        this._acoInoxidavelValores.set('1.0&Sem Chanfro Com Abertura', {
            tipoJunta: '1',
            diametroEletrodo: '1',
            diametroAdicao: '25 - 60',
            corrente: '4',
            vazaoArgonio: '1',
            numPasses: '25 - 30'
        });
        this._acoInoxidavelValores.set('1.5&Sem Chanfro Com Abertura', {
            tipoJunta: '1.5',
            diametroEletrodo: '1.5',
            diametroAdicao: '50 - 80',
            corrente: '4',
            vazaoArgonio: '1',
            numPasses: '25 - 30'
        });
        this._acoInoxidavelValores.set('2.0&Sem Chanfro Com Abertura', {
            tipoJunta: '1.5',
            diametroEletrodo: '1.5 - 2.0',
            diametroAdicao: '80 - 110',
            corrente: '4',
            vazaoArgonio: '1',
            numPasses: '25 - 30'
        });
        this._acoInoxidavelValores.set('3.0&Sem Chanfro Com Abertura', {
            tipoJunta: '2',
            diametroEletrodo: '2 - 3',
            diametroAdicao: '100 - 150',
            corrente: '4',
            vazaoArgonio: '1',
            numPasses: '25 - 30'
        });
        this._acoInoxidavelValores.set('4.0&Chanfro em V', {
            tipoJunta: '2',
            diametroEletrodo: '3',
            diametroAdicao: '120 - 200',
            corrente: '5',
            vazaoArgonio: '1',
            numPasses: '25'
        });
        this._acoInoxidavelValores.set('5.0&Chanfro em V', {
            tipoJunta: '3',
            diametroEletrodo: '3 - 4',
            diametroAdicao: '200 - 250',
            corrente: '5',
            vazaoArgonio: '1',
            numPasses: '25'
        });
        this._acoInoxidavelValores.set('6.0&Chanfro em V', {
            tipoJunta: '3',
            diametroEletrodo: '4',
            diametroAdicao: '200 - 250',
            corrente: '6',
            vazaoArgonio: '2',
            numPasses: '25'
        });

    }


}