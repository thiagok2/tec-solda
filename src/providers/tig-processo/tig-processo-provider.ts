import { TigProcesso } from "../../models/TigProcesso";
import { TigResultado } from "../../models/TigResultado";
import { TigResultadoAcoCarbonoProvider } from "./tig-resultado-aco-carbono-provider";
import { TigResultadoAcoInoxidavelProvider } from "./tig-resultado-aco-inoxidavel-provider";
import { TigResultadoAluminioAlternada } from "./tig-resultado-aluminio-alternada";
import { TigResultadoAluminioContinuaProvider } from "./tig-resultado-aluminio-continua";

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

    getCalculado() {
        return this.tigResultado ? true : false;
    }

    acoCarbono() {
        let resultadoTig = new TigResultadoAcoCarbonoProvider();
        this.tigResultado = resultadoTig.getValorAcoCarbono(this.tigProcesso.espessuraAproximada);
    }

    acoInoxidavel() {
        let resultadoTig = new TigResultadoAcoInoxidavelProvider();
        let especura = this.tigProcesso.espessuraAproximada;
        this.tigResultado = resultadoTig.getValorAcoInoxidavel(especura);
    }

    aluminioCorrenteAlternada() {
        let resultadoTig = new TigResultadoAluminioAlternada();
        let posicao = this.tigProcesso.posicaoSoldagem;
        let especura = this.tigProcesso.espessuraAproximada;
        this.tigResultado = resultadoTig.getValorAluminioAlternada(especura, posicao);
    }

    aluminioCorrenteContinua() {
        let resultadoTig = new TigResultadoAluminioContinuaProvider();
        let especura = this.tigProcesso.espessuraAproximada;
        let tipoJunta = this.tigProcesso.tipoJunta;
        this.tigResultado = resultadoTig.getValorAluminioContinua(especura, tipoJunta);
    }

    
}

