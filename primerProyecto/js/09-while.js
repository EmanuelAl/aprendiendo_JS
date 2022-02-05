
// Bucle while
var year = 2018;
/*
while(year <=2051){//mientras año sea menor o igual a 2051
	//ejecuta esto
	console.log("Estamos en el año: " + year);

	year++;//incrementamos para que el bucle no sea infinito y se acerque al valor 2051
}
*/
while(year != 1991){//mientras year sea distinto de 1991
	//se ejecuta el codigo
	console.log("Estamos en el año: " + year);

	if(year == 2000){
		break;// con esto salimos del bucle al llegar year a 2000
	}
	year--;
}
//operadores de incremento y decremento

//variable++
//variable--

//Do while , ejecuta primero el bloque de codigo y luego comprueba la condicion

var years = 20;

do{
	alert("SOLO CUANDO SEA DIFERENTE A 20");
	//SE EJECUTA UNA VEZ PORQUE YEARS NO ES DISTINTO DE 20, ES IGUAL, YA CON ESO NO SE CUMPLE LA CONDICION
}while(years != 20)