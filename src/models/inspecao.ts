

export class Inspecao{

	dataInspecao: Date;
	soldador: string;
	inspetor: string;

	foto;//base64

	observacoes: string;

	aprovado: boolean;
	dataAprovado: Date;
	mordedura: boolean = false;
	poros: boolean = false;
	trinca: boolean = false;
	cordaoFino: boolean = false;
	faltaFusao: boolean = false;
	cordaoLargo: boolean = false;
	respingo: boolean = false;
	desalinhamento: boolean = false;
	faltaPenetracao: boolean = false;

	constructor(){

	}
}