export interface ProcessosTig {
    id : string,
    titulo: string,
    subtitulo: string,
    imagem?: string,

    parametros?: {
        espessuraAproximada: string,
        posicaoSoldagem? : string,
        tipoJunta?: string,

        diametroEletrodo: string,
        diametroadicao: string,
        velocidadeSoldagem?: string,
        correnteSoldaPasseRaiz?: string,
        correnteSoldaOutrosPasses?: string,
        corrente?: string,
        tensao?: string,
        vazaoArgonio?: string,
        vazaoHelio?: string,
        numPasses?: string,


    }
}
