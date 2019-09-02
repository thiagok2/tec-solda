import { Inspecao } from "../../models/inspecao";

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Injectable } from "@angular/core";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable()
export class PdfCreateProvider {
    item: Inspecao;
    pdfDocument;

    constructor(item: Inspecao) {
        this.item = item;
        this.createPdf();
    }

    returnPdf() {
        return this.pdfDocument;
    }

    createPdf() {
        this.pdfDocument = {
            content: [
                {
                    columns: [
                        {
                            //image: '../assets/img/IFAL.png',
                            //fit: [100, 100]
                            width: 100,
                            text: 'image',
                            //image: `data:image/jpeg;base64,${this.item.foto}`
                        },
                        {
                            text: 'RELATÓRIO DE INSPEÇÃO VISUAL DE SOLDA \n\n\n\n',
                            style: 'header',
                            alignment: 'center'
                        },
                        {
                            width: 100,
                            columns: [
                                {
                                    text: 'RIVS. Nº.:',
                                    alignment: 'left',
                                    fontSize: 8
                                },
                                {
                                    text: 'PÁG.:',
                                    alignment: 'right',
                                    fontSize: 8
                                }
                            ]
                        },

                    ]
                },
                {
                    style: 'simple',
                    columns: [
                        {
                            text: 'CLIENTE:',

                        },
                        {
                            columns: [
                                {
                                    text: 'CONTRATO:',

                                },
                                {
                                    text: 'NOTA FISCAL N:',

                                }
                            ]
                        },
                    ]
                },
                {
                    text: ' \n\n',
                },
                {
                    text: 'DESENHO (Nº e EM.):',
                    style: 'simple'
                },
                {
                    text: ' \n\n\n',
                },
                {
                    text: 'REGISTRO\n\n',
                    fontSize: 10,
                    bold: true,
                    alignment: 'center',
                },
                {
                    columns: [
                        {
                            width: 30,
                            text: 'ITEM ',
                            fontSize: 10,
                            alignment: 'left',
                        },
                        {
                            text: 'DESCRIÇÃO',
                            fontSize: 8,
                            alignment: 'center',
                        }
                    ]
                },
                {
                    text: ' \n',
                },
                {
                    columns: [

                        {
                            width: 40,
                            text: '1.',
                            fontSize: 11,
                            alignment: 'left',
                        },
                        {
                            text: 'OBJETIVO - VERIFICAR SE A SOLDA EXECUTADA NÃO APRESENTA DEFEITOS.',
                            fontSize: 11,
                            alignment: 'left',
                        }

                    ]
                },
                {
                    text: ' \n',
                },
                {
                    style: 'simple',
                    columns: [

                        {
                            width: 40,
                            text: '  ',
                            fontSize: 11,
                            alignment: 'left',
                        },
                        {
                            text: 'NOME DA PEÇA:',
                            fontSize: 9,
                            alignment: 'left',
                        }

                    ]
                },
                {
                    text: ' \n\n',
                },
                {
                    columns: [
                        {
                            width: 40,
                            text: '2.',
                            fontSize: 10,
                            alignment: 'center',
                        },
                        {
                            columns: [
                                {
                                    text: 'RESULTADO - POSSÍVEIS TIPOS DE DESCONTINUIDADES',
                                    fontSize: 8,
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'IMAGEM',
                                    fontSize: 8,
                                    bold: true,
                                    alignment: 'center',
                                }

                            ]
                        },
                    ]
                },
                {
                    text: ' \n',
                },
                {
                    style: 'simple',
                    columns: [
                        {
                            width: 40,
                            text: '  ',
                        },
                        {
                            text: 'FALTA DE FUSÃO \n\nPORO SUPERFICIAL \n\nTRINCA \n\nMORDEDURA \n\nABERTURA DE ARCO \n\nRESPINGO \n\nDESALINHAMENTO \n\nFALTA DE PENETRAÇÃO \n\nOUTROS',

                            alignment: 'left',
                        },
                        {
                            text: 'imagem',
                            //image: `data:image/jpeg;base64,${this.item.foto}`,
                            alignment: 'center',
                        },

                    ]
                },
                {
                    text: ' \n\n\n',
                },
                {
                    columns: [
                        {
                            width: 40,
                            text: '3.',
                            fontSize: 11,
                            alignment: 'center',
                        },
                        {
                            text: 'CONCLUSÃO - A INSPEÇÃO VISUAL EXECUTADO EM 100% DA SOLDA, APRESENTOU RESULTADO SATISFATÓRIO.',
                            fontSize: 8,
                            bold: true,
                            alignment: 'left',
                        }

                    ]
                },
                {
                    text: ' \n'
                },
                {
                    style: 'simple',
                    columns: [
                        {
                            width: 40,
                            text: '  ',
                            fontSize: 11,
                            alignment: 'left',
                        },
                        {
                            text: 'SIM \n\nNÂO',
                            fontSize: 8,
                            alignment: 'left',
                        }

                    ]
                },
                {
                    text: ' \n\n'
                },
                {
                    columns: [
                        {
                            width: 40,
                            text: ' '
                        },
                        {
                            text: 'INFORMAÇÕES COMPLEMENTARES:\n\n\n\n\n\n\n',
                            fontSize: 10,
                            alignment: 'left'
                        }
                    ]
                },
                {
                    columns: [
                        {
                            text: 'APROVAÇÃO DO RIVS',
                            bold: true,
                            fontSize: 10,
                            alignment: 'center'
                        },
                        {
                            text: 'LIBERAÇÃO DO PRODUTO',
                            bold: true,
                            fontSize: 10,
                            alignment: 'center'
                        }
                    ]
                },
                {
                    columns: [
                        {
                            columns: [
                                {
                                    width: 25,
                                    text: 'REV.:',
                                    fontSize: 8,
                                    alignment: 'left'
                                },
                                {
                                    text: 'ELABORADO POR:',
                                    fontSize: 8,
                                    alignment: 'left'
                                },
                                {
                                    text: 'VERIF. / APROVADO POR:',
                                    fontSize: 8,
                                    alignment: 'left'
                                }
                            ]
                        },
                        {
                            columns: [
                                {
                                    width: 15,
                                    text: ' ',
                                    fontSize: 8,
                                    bold: true,
                                    alignment: 'left'
                                },
                                {
                                    width: 60,
                                    text: `${this.item.aprovado ? 'X' : ' '} APROVADO`,
                                    fontSize: 8,
                                    alignment: 'left'
                                },
                                {
                                    text: 'INSPECIONADO POR:',
                                    fontSize: 8,
                                    alignment: 'center'
                                }
                            ]
                        }
                    ]
                },
                {
                    columns: [
                        {
                            columns: [
                                {
                                    width: 20,
                                    text: '0',
                                    fontSize: 8,
                                    alignment: 'center'
                                },
                                {
                                    text: this.item.soldador,
                                    fontSize: 8,
                                    alignment: 'left'
                                },
                                {
                                    text: this.item.inspetor ? this.item.inspetor : 'NÂO APROVADO',
                                    fontSize: 8,
                                    alignment: 'left'
                                }
                            ]
                        },
                        {
                            columns: [
                                {
                                    width: 15,
                                    text: ' ',
                                    fontSize: 8,
                                    bold: true,
                                    alignment: 'left'
                                },
                                {
                                    width: 60,
                                    text: `${this.item.aprovado ? ' ' : 'X'} REPROVADO`,
                                    fontSize: 8,
                                    alignment: 'left'
                                },
                                {
                                    text: this.item.inspetor,
                                    fontSize: 8,
                                    alignment: 'left'
                                }
                            ]
                        }
                    ]
                },
                {
                    text: ' \n'
                },
                {
                    columns: [
                        {
                            text: `DATA DA APROVAÇÃO: ${this.item.aprovado ? this.item.dataAprovado : ' NÃO APROVADO..'}`,
                            fontSize: 8,
                            alignment: 'left'
                        },
                        {
                            text: `DATA DA LIBERAÇÃO DO PRODUTO: ${this.item.dataInspecao}`,
                            fontSize: 8,
                            alignment: 'left'
                        }
                    ]
                },
                {
                    text: ' \n'
                }
            ],
            styles: {
                header: {
                    fontSize: 13,
                    bold: true,
                    alignment: 'center',
                },
                simple: {
                    fontSize: 8,
                }
            }
        }
    }
}