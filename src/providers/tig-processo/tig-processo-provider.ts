import { TigProcesso } from "../../models/TigProcesso";
import { TigResultado } from "../../models/TigResultado";
import { TigResultadoAcoCarbonoProvider } from "./tig-resultado-aco-carbono-provider";
import { TigResultadoAcoInoxidavelProvider } from "./tig-resultado-aco-inoxidavel-provider";

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
        let resultadoTig = new TigResultadoAcoCarbonoProvider();
        this.tigResultado = resultadoTig.getValorAcoCarbono(this.tigProcesso.espessuraAproximada);
    }

    acoInoxidavel() {
        let resultadoTig = new TigResultadoAcoInoxidavelProvider();
        let especura = this.tigProcesso.espessuraAproximada;
        let tipoJunta = this.tigProcesso.tipoJunta;
        this.tigResultado = resultadoTig.getValorAcoInoxidavel(especura, tipoJunta);


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

