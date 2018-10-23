import { TigResultado } from "../../models/TigResultado";

export class TigResultadoAluminioAlternada {

    private _aluminioAlternadaValores = new Map();
    private _tigResutados: TigResultado;

    constructor() {
        this.defineObjetoAluminioAlternadaValores();
    }

    getValorAluminioAlternada(especura, posicao) {
        let chave = especura + '&' + posicao;
        this._tigResutados = this._aluminioAlternadaValores.get(chave);
        return this._tigResutados;
    }

    defineObjetoAluminioAlternadaValores() {
        this._aluminioAlternadaValores.set('1.6&PLANA', {
            tipoJunta: 'Solda sem Chanfro',
            corrente: '70 - 100',
            diametroEletrodo: '1.6',
            diametroAdicao: '2.4',
            vazaoArgonio: '10',
            numPasses: '1'
        });
        this._aluminioAlternadaValores.set('3.2&PLANA', {
            tipoJunta: 'Solda sem Chanfro',
            corrente: '125 - 160',
            diametroEletrodo: '2.4',
            diametroAdicao: '3.2',
            vazaoArgonio: '10',
            numPasses: '1'
        });
        this._aluminioAlternadaValores.set('9.5&PLANA', {
            tipoJunta: 'V , 60°',
            corrente: '325 - 400',
            diametroEletrodo: '6.4',
            diametroAdicao: '6.4',
            vazaoArgonio: '17',
            numPasses: '2'
        });
        this._aluminioAlternadaValores.set('12.7&PLANA', {
            tipoJunta: 'V , 60°',
            corrente: '375 - 450',
            diametroEletrodo: '6.4',
            diametroAdicao: '6.4',
            vazaoArgonio: '17',
            numPasses: '3'
        });
        this._aluminioAlternadaValores.set('25.4&PLANA', {
            tipoJunta: 'V , 60°',
            corrente: '500 - 600',
            diametroEletrodo: '8.0 - 9.5',
            diametroAdicao: '6.4 - 9.5',
            vazaoArgonio: '17 - 25',
            numPasses: '8 - 10'
        });
        this._aluminioAlternadaValores.set('1.6&HORIZONTAL,VERTICAL', {
            tipoJunta: 'Solda sem Chanfro',
            corrente: '70 - 100',
            diametroEletrodo: '1.6',
            diametroAdicao: '2.4',
            vazaoArgonio: '10',
            numPasses: '1'
        });
        this._aluminioAlternadaValores.set('3.2&HORIZONTAL,VERTICAL', {
            tipoJunta: 'Solda sem Chanfro',
            corrente: '115 - 150',
            diametroEletrodo: '2.4',
            diametroAdicao: '3.2',
            vazaoArgonio: '10',
            numPasses: '1'
        });
        this._aluminioAlternadaValores.set('6.4&HORIZONTAL,VERTICAL', {
            tipoJunta: 'V , 60°',
            corrente: '200 - 240',
            diametroEletrodo: '4',
            diametroAdicao: '4.8',
            vazaoArgonio: '15',
            numPasses: '2'
        });
        this._aluminioAlternadaValores.set('9.5&HORIZONTAL,VERTICAL', {
            tipoJunta: 'V , 60°',
            corrente: '250 - 320',
            diametroEletrodo: '4.8',
            diametroAdicao: '6.4',
            vazaoArgonio: '17',
            numPasses: '3'
        });
        this._aluminioAlternadaValores.set('12.7&HORIZONTAL,VERTICAL', {
            tipoJunta: 'V , 60°',
            corrente: '250 - 320',
            diametroEletrodo: '4.8',
            diametroAdicao: '6.4',
            vazaoArgonio: '17',
            numPasses: '3'
        });
        this._aluminioAlternadaValores.set('1.6&SOBRE-CABEÇA', {
            tipoJunta: 'Solda sem Chanfro',
            corrente: '60 - 40',
            diametroEletrodo: '1.6',
            diametroAdicao: '2.4',
            vazaoArgonio: '12',
            numPasses: '1'
        });
        this._aluminioAlternadaValores.set('3.2&SOBRE-CABEÇA', {
            tipoJunta: 'Solda sem Chanfro',
            corrente: '115 - 150',
            diametroEletrodo: '2.4',
            diametroAdicao: '3.4',
            vazaoArgonio: '12',
            numPasses: '1'
        });
        this._aluminioAlternadaValores.set('6.4&SOBRE-CABEÇA', {
            tipoJunta: 'V , 100°',
            corrente: '210 - 260',
            diametroEletrodo: '4',
            diametroAdicao: '4.8',
            vazaoArgonio: '17',
            numPasses: '2'
        });
        this._aluminioAlternadaValores.set('12.7&SOBRE-CABEÇA', {
            tipoJunta: 'V , 100°',
            corrente: '275 - 340',
            diametroEletrodo: '4.8',
            diametroAdicao: '6.4',
            vazaoArgonio: '20',
            numPasses: '4'
        });
        



    }

}