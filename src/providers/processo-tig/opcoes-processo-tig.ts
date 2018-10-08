export class OpcoesSelecaoTig {

    static EXPESSURA_ACO_CARBONO = [0.5, 0.8, 1.0, 1.2, 1.5, 2.0];
    static EXPESSURA_ACO_INOXIDAVEL = [0.6, 0.8, 1.0, 1.5, 2, 3, 4, 5, 6];
    static ESPESSURA_ALUMINIO_CORRENTE_ALTERNADA = [1.6, 3.2, 6.4, 9.5, 12.7, 25.4];
    static ESPESSURA_ALUMINIO_CORRENTE_CONTINUA = [0.50, 0.75, 0.80, 1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 3.20, 6.30, 12.70, 19.0, 25.4];

    static TIPO_JUNTA_ACO_INOXIDAVEL = ['sem chanfro sem abertura', 'sem chanfro com abertura', 'Chanfro em V'];
    static POSICAO_SOLDAGEM = ['PLANA', 'HORIZONTAL,VERTICAL', 'SOBRE-CABEÇA'];
    static TIPO_JUNTA_ALUMINIO_CORRENTE_CONTINUA = ['Solda sem chanfro', 'V-60° 3,0 mm solda sem chanfro', 'V-60° ou duplo V; raiz 5,0 mm solda sem chanfro '];


    retornarEspessuras(tipoEspessuras) {
        switch (tipoEspessuras) {
            case 'acoCarbono':
                return OpcoesSelecaoTig.EXPESSURA_ACO_CARBONO;
            case 'acoInoxidavel':
                return OpcoesSelecaoTig.EXPESSURA_ACO_INOXIDAVEL;
            case 'aluminioCorrenteAlternada':
                return OpcoesSelecaoTig.ESPESSURA_ALUMINIO_CORRENTE_ALTERNADA;
            case 'aluminioCorrenteContinua':
                return OpcoesSelecaoTig.ESPESSURA_ALUMINIO_CORRENTE_CONTINUA;
        }

    }

    retornarOpcaoSeguinte(proximoParametro) {
        switch (proximoParametro) {
            case 'acoInoxidavel':
                return OpcoesSelecaoTig.TIPO_JUNTA_ACO_INOXIDAVEL;
            case 'aluminioCorrenteAlternada':
                return OpcoesSelecaoTig.POSICAO_SOLDAGEM;
            case 'aluminioCorrenteContinua':
                return OpcoesSelecaoTig.TIPO_JUNTA_ALUMINIO_CORRENTE_CONTINUA;
            default:
                return undefined;
        }
    }
}