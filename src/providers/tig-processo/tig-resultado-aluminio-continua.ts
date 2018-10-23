import { TigResultado } from "../../models/TigResultado";

export class TigResultadoAluminioContinuaProvider {

    private _aluminioContinuaValores = new Map();
    private _tigResutados: TigResultado;

    constructor() {
        this.defineObjetoAluminioContinuaValores();
    }

    getValorAluminioContinua(especura, tipoJunta) {
        let chave = especura + '&' + tipoJunta;
        this._tigResutados = this._aluminioContinuaValores.get(chave);
        return this._tigResutados;
    }

    defineObjetoAluminioContinuaValores() {
        this._aluminioContinuaValores.set('0.5&Solda sem chanfro', {
            corrente: '15 - 30',
            tensao: '15 - 20',
            diametroEletrodo: '0.5',
            diametroAdicao: '0.5',
            vazaoHelio: '10 - 25',
        });
        this._aluminioContinuaValores.set('0.75&Solda sem chanfro', {
            corrente: '29 - 50',
            tensao: '15 - 20',
            diametroEletrodo: '0.5 - 0.75',
            diametroAdicao: '0.5 - 1.2',
            vazaoHelio: '10 - 25',
        });
        this._aluminioContinuaValores.set('0.8&Solda sem chanfro', {
            corrente: '65 - 70',
            tensao: '15 - 20',
            diametroEletrodo: '2.4',
            //diametroAdicao: 'Sem Adicao',
            vazaoHelio: '10 - 25',
        });
        this._aluminioContinuaValores.set('1.0&Solda sem chanfro', {
            corrente: '25 - 65',
            tensao: '15 - 20',
            diametroEletrodo: '1.2',
            diametroAdicao: '1.2',
            vazaoHelio: '10 - 25',
        });
        this._aluminioContinuaValores.set('1.25&Solda sem chanfro', {
            corrente: '35 - 95',
            tensao: '16 - 20',
            diametroEletrodo: '1.2',
            diametroAdicao: '1.2',
            vazaoHelio: '10 - 25',
        });
        this._aluminioContinuaValores.set('1.5&Solda sem chanfro', {
            corrente: '45 - 120',
            tensao: '15 - 20',
            diametroEletrodo: '1.2 - 1.6',
            diametroAdicao: '1.2 - 1.6',
            vazaoHelio: '10 - 25',
        });
        this._aluminioContinuaValores.set('1.75&Solda sem chanfro', {
            corrente: '55 - 145',
            tensao: '15 - 20',
            diametroEletrodo: '1.6',
            diametroAdicao: '1.6',
            vazaoHelio: '10 - 25',
        });
        this._aluminioContinuaValores.set('1.75&Solda sem chanfro', {
            corrente: '55 - 145',
            tensao: '15 - 20',
            diametroEletrodo: '1.6',
            diametroAdicao: '1.6',
            vazaoHelio: '10 - 25',
        });
        this._aluminioContinuaValores.set('2.0&Solda sem chanfro', {
            corrente: '80 - 175',
            tensao: '15 - 20',
            diametroEletrodo: '1.6',
            diametroAdicao: '1.6',
            vazaoHelio: '10 - 25',
        });
        this._aluminioContinuaValores.set('2.25&Solda sem chanfro', {
            corrente: '90 - 185',
            tensao: '15 - 20',
            diametroEletrodo: '1.6',
            diametroAdicao: '1.6',
            vazaoHelio: '10 - 25',
        });
        this._aluminioContinuaValores.set('3.2&Solda sem chanfro', {
            corrente: '120 - 220',
            tensao: '15 - 20',
            diametroEletrodo: '3.2',
            diametroAdicao: '3.2',
            vazaoHelio: '10 - 25',
        });
        this._aluminioContinuaValores.set('6.3&Solda sem chanfro', {
            corrente: '230 - 340',
            tensao: '15 - 20',
            diametroEletrodo: '3.2',
            diametroAdicao: '3.2 - 4.8',
            vazaoHelio: '12 - 30',
        });

        this._aluminioContinuaValores.set('12.7&V-60° 3,0 mm solda sem chanfro', {
            corrente: '300 - 450',
            tensao: '15 - 20',
            diametroEletrodo: '4.8',
            diametroAdicao: '3.2 - 6.4',
            vazaoHelio: '12 - 30',
        });
        this._aluminioContinuaValores.set('19.0&V-60° ou duplo V; raiz 5,0 mm solda sem chanfro', {
            corrente: '300 - 450',
            tensao: '15 - 20',
            diametroEletrodo: '4.8',
            diametroAdicao: '3.2 - 6.4',
            vazaoHelio: '12 - 30',
        });
        this._aluminioContinuaValores.set('25.4&V-60° ou duplo V; raiz 5,0 mm solda sem chanfro', {
            corrente: '300 - 450',
            tensao: '15 - 20',
            diametroEletrodo: '4.8',
            diametroAdicao: '3.2 - 6.4',
            vazaoHelio: '12 - 30',
        });




    }



}