import { TigResultado } from "../../models/TigResultado";

export class TigResultadoAcoInoxidavelProvider {

    private _acoInoxidavelValores = new Map();
    private _tigResutados: TigResultado;

    constructor() {
        this.defineObjetoAcoInoxidavelValores();
    }

    getValorAcoInoxidavel(especura) {
        this._tigResutados = this._acoInoxidavelValores.get(especura);
        return this._tigResutados;
    }

    defineObjetoAcoInoxidavelValores() {

        this._acoInoxidavelValores.set('0.6', {
            tipoJunta: 'Sem Chanfro e Sem Abertura',
            diametroEletrodo: '1',
            corrente: '15 - 25',
            vazaoArgonio: '3',
            numPasses: '1',
            velocidadeSoldagem: '30 - 40'
        });
        this._acoInoxidavelValores.set('0.8', {
            tipoJunta: 'Sem Chanfro e Sem Abertura',
            diametroEletrodo: '1',
            corrente: '15 - 30',
            vazaoArgonio: '3',
            numPasses: '1',
            velocidadeSoldagem: '30 - 40'
        });
        this._acoInoxidavelValores.set('1.0', {
            tipoJunta: 'Sem Chanfro e Com Abertura',
            diametroEletrodo: '1',
            diametroAdicao: '1', 
            corrente: '25 - 60',
            vazaoArgonio: '4',
            numPasses: '1',
            velocidadeSoldagem: '25 - 30'
        });
        this._acoInoxidavelValores.set('1.5', {
            tipoJunta: 'Sem Chanfro e Com Abertura',
            diametroEletrodo: '1.5',
            diametroAdicao: '1.5', 
            corrente: '50 - 80',
            vazaoArgonio: '4',
            numPasses: '1',
            velocidadeSoldagem: '25 - 30'
        });
        this._acoInoxidavelValores.set('2.0', {
            tipoJunta: 'Sem Chanfro e Com Abertura',
            diametroEletrodo: '1.5',
            diametroAdicao: '1.5 - 2.0', 
            corrente: '80 - 110',
            vazaoArgonio: '4',
            numPasses: '1',
            velocidadeSoldagem: '25 - 30'
        });
        this._acoInoxidavelValores.set('3.0', {
            tipoJunta: 'Sem Chanfro e Com Abertura',
            diametroEletrodo: '2',
            diametroAdicao: '2 - 3', 
            corrente: '100 - 150',
            vazaoArgonio: '4',
            numPasses: '1',
            velocidadeSoldagem: '25 - 30'
        });
        this._acoInoxidavelValores.set('4.0', {
            tipoJunta: 'Chanfro em V',
            diametroEletrodo: '2',
            diametroAdicao: '3', 
            corrente: '120 - 200',
            vazaoArgonio: '5',
            numPasses: '1',
            velocidadeSoldagem: '25'
        });
        this._acoInoxidavelValores.set('5.0', {
            tipoJunta: 'Chanfro em V',
            diametroEletrodo: '3',
            diametroAdicao: '3 - 4', 
            corrente: '200 - 250',
            vazaoArgonio: '5',
            numPasses: '1',
            velocidadeSoldagem: '25'
        });
        this._acoInoxidavelValores.set('6.0', {
            tipoJunta: 'Chanfro em V',
            diametroEletrodo: '3',
            diametroAdicao: '4', 
            corrente: '200 - 250',
            vazaoArgonio: '6',
            numPasses: '2',
            velocidadeSoldagem: '25'
        });

    }


}