'use strict'
// Switch 

var edad =prompt("dime tu edad");
var imprime = "";


switch(parseInt(edad)){//uso parseInt para pasar el nro en string (obtenido por el prompt()) a entero
	case 18:
		imprime = "Acabas de cumplir la mayoria de edad";
		console.log(imprime);
	break;
	case 25:
		imprime = "ya eres un adulto";
	break;
	case 40:
		imprime = "crisis de los cuarenta";
	break;
	case 75:
		imprime = "Ya eres un anciano";
	break;
	default:
		imprime = "tu edad es neutra";
}

console.log(imprime);
