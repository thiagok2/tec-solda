
import {ParamsCalc} from './param-calc'

export class EspecProcesso{

	calculado: boolean;

	paramCalc: ParamsCalc;

	numPasses: number;

	classificacaoEletrotoAWS: string;
	diametroEletrodo: string;
	correnteEletricaIntervalo: string;
	velocidadeSoldagemIntervalo: string;
	pernaSolda: string;


	
	constructor(paramCalc: ParamsCalc){
		this.paramCalc = paramCalc;
		this.build();

	}

	build(){
		if(this.paramCalc.posicao == 'posicaoPlanaReto'){//index=1
			this.buildPosicaoPlanaReto();
		}else if(this.paramCalc.posicao == 'posicaoPlanaV'){//index=2
			this.buildPosicaoPlanaV();
		}else if(this.paramCalc.posicao == 'posicaoPlanaHorizontal'){//index=3
			this.buildPosicaoPlanaHorizontal();
		}else if(this.paramCalc.posicao == 'posicaoPlanaAngulo'){//index=4
			this.buildPosicaoPlanaAngulo();
		}else if(this.paramCalc.posicao == 'soldagemDeTopo'){//index=5
			this.buildSoldagemDeTopo();
		}else if(this.paramCalc.posicao == 'soldagemDeTopoV'){//index=6
			this.buildSoldagemDeTopoV();
		}else if(this.paramCalc.posicao == 'soldagemEmAngulo'){//index=7
			this.buildSoldagemEmAngulo();
		}
	}

	buildPosicaoPlanaReto(){
		let diametroEletrodoArray = ['2.4', '3.2', '3.2', '4','4.8'];
		let correnteEletricaIntervaloArray = ['40 - 50',	'70 - 100',	'80 - 105',	'120 - 130', '135 - 145'];
		let velocidadeSoldagemIntervaloArray = ['50 - 65',	'70 - 90', '65 - 80',	'50 - 75', 	'45 - 70'];


		this.numPasses = 1;
		this.classificacaoEletrotoAWS = 'E6010; E6011';

		let indice = ParamsCalc.EXPESSURA_POSICAO_PLANA_SOLDAGEM_TOPO_RETO.indexOf(this.paramCalc.espessura);

		this.diametroEletrodo = diametroEletrodoArray[indice];
		this.correnteEletricaIntervalo = correnteEletricaIntervaloArray[indice];
		this.velocidadeSoldagemIntervalo = velocidadeSoldagemIntervaloArray[indice];

		this.calculado = true;
	}

	buildPosicaoPlanaV(){
		let classificacaoEletrodoAWSArray = ['E6011','E6027','E6011', 'E6027','E6011', 'E6011', 'E6027'];
		let diametroEletrodoArray = ['4', '4', '4', '4','4', '6.4', '6.4'];
		let correnteEletricaIntervaloArray = ['135', '240', '135', '240', '135', '275', '400'];
		let velocidadeSoldagemIntervaloArray = ['15 - 20','30 - 35','15 - 20','30 - 35','15 - 20','20 - 25','25 - 30'];
		//EXPESSURA_POSICAO_PLANA_SOLDAGEM_TOPO_V
		//this.numPasses = paramCalc.numPasse;

		let indice = undefined;
		
		if(this.paramCalc.espessura == 8 && this.paramCalc.numPasse == 1 ){
			indice = 0;
		} else if(this.paramCalc.espessura == 8 && this.paramCalc.numPasse == 2 ){
			indice = 1;
		} else if(this.paramCalc.espessura == 8 && this.paramCalc.numPasse == 3 ){
			return;
		} else if(this.paramCalc.espessura == 9.5 && (this.paramCalc.numPasse == 1 || this.paramCalc.numPasse == 2) ){
			indice = 2;
		} else if(this.paramCalc.espessura == 9.5 && this.paramCalc.numPasse == 3 ){
			indice = 3;	
		} else if(this.paramCalc.espessura == 12.7 && this.paramCalc.numPasse == 1 ){
			indice = 4;
		} else if(this.paramCalc.espessura == 12.7 && this.paramCalc.numPasse == 2 ){
			indice = 5;
		}else if(this.paramCalc.espessura == 12.7 && this.paramCalc.numPasse == 3 ){
			indice = 6;
		}else {
			if(this.paramCalc.espessura == undefined){
				return;
			}
			if(this.paramCalc.numPasse == undefined){
				return;
			}
		}

		this.classificacaoEletrotoAWS = classificacaoEletrodoAWSArray[indice];
		this.diametroEletrodo = diametroEletrodoArray[indice];
		this.correnteEletricaIntervalo = correnteEletricaIntervaloArray[indice];
		this.velocidadeSoldagemIntervalo = velocidadeSoldagemIntervaloArray[indice];
		
		this.calculado = true;

	}

	buildPosicaoPlanaHorizontal(){
		let classificacaoEletrodoAWSArray = ['E6013', 'E6012; E3013','E6012; E3013','E6012; E3013','E6012; E3013'];
		let diametroEletrodoArray = ['2.4', '3.2', '4.0', '4.8; 4', '4.8'];

		let correnteEletricaIntervaloArray = ['70', '95 - 105', '140 - 155', '160 - 190', '200 - 210'];
		let velocidadeSoldagemIntervaloArray = ['35 - 45', '35 - 50', '40 - 50', '35 - 60', '35 - 50'];


		this.numPasses = 1;
		
		let indice = ParamsCalc.EXPESSURA_POSICAO_PLANA_HORIZONTAL_ANGULO.indexOf(this.paramCalc.espessura);

		this.classificacaoEletrotoAWS = classificacaoEletrodoAWSArray[indice];
		this.diametroEletrodo = diametroEletrodoArray[indice];
		this.correnteEletricaIntervalo = correnteEletricaIntervaloArray[indice];
		this.velocidadeSoldagemIntervalo = velocidadeSoldagemIntervaloArray[indice];

		this.calculado = true;
	}
	//calculo posicao plana angulo
	buildPosicaoPlanaAngulo(){
		let pernaSoldaArray = ['6.4',	'7,1 - 8.0', '9.5'];
		let diametroEletrodoArray = ['4.8;5.6',	'6.4',	'8.0'];

		let correnteEletricaIntervaloArray = ['275 - 325','375','475'];
		let velocidadeSoldagemIntervaloArray = ['35 - 45', '35 - 40', '28 - 30'];


		this.numPasses = 1;
		
		let indice = ParamsCalc.EXPESSURA_POSICAO_PLANA_ANGULO.indexOf(this.paramCalc.espessura);

		this.pernaSolda = pernaSoldaArray[indice];
		this.classificacaoEletrotoAWS = 'E7024';
		this.diametroEletrodo = diametroEletrodoArray[indice];
		this.correnteEletricaIntervalo = correnteEletricaIntervaloArray[indice];
		this.velocidadeSoldagemIntervalo = velocidadeSoldagemIntervaloArray[indice];

		this.calculado = true;
	}

	buildSoldagemDeTopo(){
		let diametroEletrodoArray = ['2.4', '3.2', '3.2', '4.0','4.8'];

		let correnteEletricaIntervaloArray = ['45 - 55', '75 - 100', '90 - 115', '130 - 140', '150 - 155'];
		let velocidadeSoldagemIntervaloArray = ['60 - 75',	'75 - 95',	'70 - 80',	'55 - 80',	'45 - 75'];

		this.numPasses = 1;
		this.classificacaoEletrotoAWS = 'E6010; E6011';

		let indice = ParamsCalc.EXPESSURA_SOLDAGEM_TOPO_VERTICAL_DESCENDENTE.indexOf(this.paramCalc.espessura);

		this.diametroEletrodo = diametroEletrodoArray[indice];
		this.correnteEletricaIntervalo = correnteEletricaIntervaloArray[indice];
		this.velocidadeSoldagemIntervalo = velocidadeSoldagemIntervaloArray[indice];

		this.calculado = true;
	}

	buildSoldagemDeTopoV(){
		//EXPESSURA_SOLDAGEM_TOPO_V_SOBRECABECA

		this.calculado = false;
	}

	buildSoldagemEmAngulo(){
		//Soldagem em ângulo na posição sobrecabeça

		let pernaSoldaArray = ['4.0', '4.8', '6.4',	'8.0', '9.5' , '12.7', '15.9', '19.1'];
		let diametroEletrodoArray = ['4.0', '4.8', '4.8', '4.8', '4.8', '4.8', '4.8', '4.8'];

		let correnteEletricaIntervaloArray = ['130', '170', '170', '170', '170', '170', '170', '170'];
		let velocidadeSoldagemIntervaloArray = ['18 - 20', '22 - 24', '12 - 13', '17 - 19', '17 - 19','17 - 19', '17 - 19', '17 - 19'];


		let indice = ParamsCalc.EXPESSURA_SOLDAGEM_ANGULO_SOBRECABECA.indexOf(this.paramCalc.espessura);
		
		this.numPasses = 1;
		this.classificacaoEletrotoAWS = 'E6010';

		this.pernaSolda = pernaSoldaArray[indice];
		this.diametroEletrodo = diametroEletrodoArray[indice];
		this.correnteEletricaIntervalo = correnteEletricaIntervaloArray[indice];
		this.velocidadeSoldagemIntervalo = velocidadeSoldagemIntervaloArray[indice];


		this.calculado = true;
	}


}