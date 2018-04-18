export class Soldador {
	nome: string;
	telefone: number;
 	escolaridade: string;
	experiencia: number;
	inspetor:boolean = false;
	ativo: boolean = true;
	dataCadastro: Date; 
}


export class SoldadorElement {
  key: string;
  soldador: Soldador;
}