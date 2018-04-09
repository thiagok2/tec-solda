

export class ParamsCalc{

	espessura: number;
	numPasse: number;


	posicao: string;
   	hasSelectNumPasse: boolean;
    hasNumPasse: boolean;
    hasNumPerna: boolean;


	static EXPESSURA_POSICAO_PLANA_SOLDAGEM_TOPO_RETO: number[] = [1.5, 1.9, 2.65, 3.35];//1

	static EXPESSURA_POSICAO_PLANA_SOLDAGEM_TOPO_V: number[] = [8, 9.5, 12.7];//2

	static EXPESSURA_POSICAO_PLANA_HORIZONTAL_ANGULO: number[] = [1.2, 1.5, 1.9, 2.65, 3.35];//3

	static EXPESSURA_POSICAO_PLANA_ANGULO: number[] = [8, 9.5, 12.7];//4

	static EXPESSURA_SOLDAGEM_TOPO_VERTICAL_DESCENDENTE: number[] = [1.2, 1.5, 1.9, 2.65, 3.35];//5

	static EXPESSURA_SOLDAGEM_TOPO_V_SOBRECABECA: number[] = [8, 9.5, 12.7, 19.1, 25.4];//6

	static EXPESSURA_SOLDAGEM_ANGULO_SOBRECABECA: number[] = [4.8, 6.4, 8, 9.5, 12.7, 15.9, 19.1, 25.4];//7


	static PASSE_POSICAO_PLANA_SOLDAGEM_TOPO_V_MAX: number[] = [1,2,3];

	static PASSE_SOLDAGEM_TOPO_V_SOBRECABECA_MAX: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13];


  	constructor(
  		posicao: string, 	
  		hasSelectNumPasse: boolean,
    	hasNumPasse: boolean,
    	hasNumPerna: boolean){


  		this.posicao = posicao;
  		this.hasSelectNumPasse = hasSelectNumPasse
  		this.hasNumPasse = hasNumPasse;
  		this.hasNumPerna = hasNumPerna;


  	}

	getEspessuras(index){
		switch (index) {
			case 1:
				return ParamsCalc.EXPESSURA_POSICAO_PLANA_SOLDAGEM_TOPO_RETO;
			case 2:
				return ParamsCalc.EXPESSURA_POSICAO_PLANA_SOLDAGEM_TOPO_V;
			case 3:
				return ParamsCalc.EXPESSURA_POSICAO_PLANA_HORIZONTAL_ANGULO;
			case 4:
				return ParamsCalc.EXPESSURA_POSICAO_PLANA_ANGULO;
			case 5:
				return ParamsCalc.EXPESSURA_SOLDAGEM_TOPO_VERTICAL_DESCENDENTE;	
			case 6:
				return ParamsCalc.EXPESSURA_SOLDAGEM_TOPO_V_SOBRECABECA;
			case 7:
				return ParamsCalc.PASSE_SOLDAGEM_TOPO_V_SOBRECABECA_MAX;			
			default:
				return [];

		}
	}

	getPasses(index){
		switch (index) {
			case 2:
				return ParamsCalc.PASSE_POSICAO_PLANA_SOLDAGEM_TOPO_V_MAX;
			case 6:
				return ParamsCalc.PASSE_SOLDAGEM_TOPO_V_SOBRECABECA_MAX;	
			default:
				return [];

		}
	}

}