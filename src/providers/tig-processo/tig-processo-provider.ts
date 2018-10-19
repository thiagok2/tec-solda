import { TigProcesso } from "../../models/TigProcesso";
import { TigResultado } from "../../models/TigResultado";
import { TigResultadoValoresProvider } from "./tig-valores-provider";

export class TigProcessoProvider {

    public tigResultado: TigResultado;
    public tigProcesso: TigProcesso;

    constructor(processoTig: TigProcesso) {
        this.tigProcesso = processoTig;
        this.build();
    }

    build() {
        switch (this.tigProcesso.id) {
            case 'acoCarbono':
                this.acoCarbono();
                break; 
            case 'acoInoxidavel':
                this.acoInoxidavel();
                break; 
            case 'aluminioCorrenteAlternada':
                this.aluminioCorrenteAlternada();
                break;  
            case 'aluminioCorrenteContinua':
                this.aluminioCorrenteContinua();
                break;  
        }
    }

    acoCarbono() {
        let resultadoTig = new TigResultadoValoresProvider();
        this.tigResultado = resultadoTig.getValorAcoCarbono(this.tigProcesso.espessuraAproximada);
    }

    acoInoxidavel() {
        let resultadoTig;
        this.tigResultado = resultadoTig;


    }

    aluminioCorrenteAlternada() {
        let resultadoTig;
        this.tigResultado = resultadoTig;


    }

    aluminioCorrenteContinua() {
        let resultadoTig;
        this.tigResultado = resultadoTig;


    }

    getCalculado() {
        return this.tigResultado ? true : false;
    }

}

