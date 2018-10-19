import { TigResultado } from "../../models/TigResultado";

export class TigResultadoValoresProvider{

    private acoCarbonoValores = new Map();
    private tigResutados : TigResultado;

    constructor(){
        this.defineObjetoAcoCarbonoValores();
    }

    getValorAcoCarbono(especura){
        this.tigResutados = this.acoCarbonoValores.get(especura);
        return this.tigResutados;
    }

    ///0.5, 0.8, 1.0, 1.2, 1.5, 2.0
    defineObjetoAcoCarbonoValores(){
        
        this.acoCarbonoValores.set('0.5',{
            diametroEletrodo : '1.6',
            velocidadeSoldagem : '15-25',
            correnteSoldaPasseRaiz: '15-20',
            correnteSoldaOutrosPasses : '15-30',
            vazaoArgonio : '4'
        });
    }



}