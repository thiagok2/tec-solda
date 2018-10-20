import { TigResultado } from "../../models/TigResultado";

export class TigResultadoValoresProvider {

    private _acoCarbonoValores = new Map();
    private _tigResutados: TigResultado;

    constructor() {
        this.defineObjetoAcoCarbonoValores();
    }

    getValorAcoCarbono(especura) {
        this._tigResutados = this._acoCarbonoValores.get(especura);
        return this._tigResutados;
    }

    defineObjetoAcoCarbonoValores() {
        this._acoCarbonoValores.set('0.5', {
            diametroEletrodo: '1.6',
            velocidadeSoldagem: '15-25',
            correnteSoldaPasseRaiz: '15-20',
            correnteSoldaOutrosPasses: '15-30',
            vazaoArgonio: '4'
        });
        this._acoCarbonoValores.set('0.8', {
            diametroEletrodo: '1.6',
            velocidadeSoldagem: '30-40',
            correnteSoldaPasseRaiz: '25-30',
            correnteSoldaOutrosPasses: '35-50',
            vazaoArgonio: '4'
        });
        this._acoCarbonoValores.set('1.0', {
            diametroEletrodo: '1.6',
            diametroAdicao: '0.8',
            velocidadeSoldagem: '30-50',
            correnteSoldaPasseRaiz: '25-35',
            correnteSoldaOutrosPasses: '35-60',
            vazaoArgonio: '4'
        });
        this._acoCarbonoValores.set('1.2', {
            diametroEletrodo: '1.6',
            diametroAdicao: '1.2',
            velocidadeSoldagem: '40-80',
            correnteSoldaPasseRaiz: '35-70',
            correnteSoldaOutrosPasses: '50-80',
            vazaoArgonio: '4'
        });
        this._acoCarbonoValores.set('1.5', {
            diametroEletrodo: '1.6',
            diametroAdicao: '1.2',
            velocidadeSoldagem: '50-100',
            correnteSoldaPasseRaiz: '50-70',
            correnteSoldaOutrosPasses: '70-100',
            vazaoArgonio: '5'
        });
        this._acoCarbonoValores.set('2.0', {
            diametroEletrodo: '3.2',
            diametroAdicao: '1.2',
            velocidadeSoldagem: '70-120',
            correnteSoldaPasseRaiz: '70-90',
            correnteSoldaOutrosPasses: '80-120',
            vazaoArgonio: '5'
        });
    }



}