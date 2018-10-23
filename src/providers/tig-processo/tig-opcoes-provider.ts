export class TigOpcoesProvider {

    static EXPESSURA_ACO_CARBONO = ['0.5', '0.8', '1.0', '1.2', '1.5', '2.0'];
    static EXPESSURA_ACO_INOXIDAVEL = ['0.6', '0.8', '1.0', '1.5', '2.0', '3.0', '4.0', '5.0', '6.0'];
    static ESPESSURA_ALUMINIO_CORRENTE_ALTERNADA = ['1.6', '3.2', '6.4', '9.5', '12.7', '25.4'];
    static ESPESSURA_ALUMINIO_CORRENTE_CONTINUA = ['0.5', '0.75', '0.8', '1.0', '1.25', '1.5', '1.75', '2.0', '2.25', '3.2', '6.3', '12.7', '19.0', '25.4'];

    static TIPO_JUNTA_ACO_INOXIDAVEL = ['Sem Chanfro Sem Abertura', 'Sem Chanfro Com Abertura', 'Chanfro em V'];
    static POSICAO_SOLDAGEM = ['PLANA', 'HORIZONTAL,VERTICAL', 'SOBRE-CABEÇA'];
    static TIPO_JUNTA_ALUMINIO_CORRENTE_CONTINUA = ['Solda sem chanfro', 'V-60° 3,0 mm solda sem chanfro', 'V-60° ou duplo V; raiz 5,0 mm solda sem chanfro'];


    retornarEspessuras(tipoEspessuras) {
        switch (tipoEspessuras) {
            case 'acoCarbono':
                return TigOpcoesProvider.EXPESSURA_ACO_CARBONO;
            case 'acoInoxidavel':
                return TigOpcoesProvider.EXPESSURA_ACO_INOXIDAVEL;
            case 'aluminioCorrenteAlternada':
                return TigOpcoesProvider.ESPESSURA_ALUMINIO_CORRENTE_ALTERNADA;
            case 'aluminioCorrenteContinua':
                return TigOpcoesProvider.ESPESSURA_ALUMINIO_CORRENTE_CONTINUA;
        }
    }


    get TIPO_JUNTA_ACO_INOXIDAVEL() {
        return TigOpcoesProvider.TIPO_JUNTA_ACO_INOXIDAVEL;
    }

    get POSICAO_SOLDAGEM() {
        return TigOpcoesProvider.POSICAO_SOLDAGEM;
    }

    get TIPO_JUNTA_ALUMINIO_CORRENTE_CONTINUA() {
        return TigOpcoesProvider.TIPO_JUNTA_ALUMINIO_CORRENTE_CONTINUA;
    }
}