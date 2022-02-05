
//Funciones
//Una funcion es una agrupacion reutilizable de
// un conjunto de instrucciones

//asi se define la funcion
function porConsola(nro1, nro2){
	console.log("Suma: "+(nro1+nro2));
	console.log("Resta: "+(nro1-nro2));
	console.log("Multiplicacion: "+(nro1*nro2));
	console.log("Division: "+(nro1/nro2));
	console.log("#########################");
}
function porPantalla(nro1, nro2){
	document.write("Suma: "+(nro1+nro2)+"<br>");
	document.write("Resta: "+(nro1-nro2)+"<br>");
	document.write("Multiplicacion: "+(nro1*nro2)+"<br>");
	document.write("Division: "+(nro1/nro2)+"<br>");
	document.write("#########################"+"<br>");	
}


function calculadora(nro1, nro2, mostrar = false){//tercer parametro se define opcional
	//conjunto de instrucciones a ejecutar

	if(mostrar == false){
		porConsola(nro1, nro2);
	}else{
		porPantalla(nro1, nro2);
	}
	

	return true;
}
/*
//invocar o llamar a la funcion
calculadora(2, 5);
//tambien lo que devuelva la funcion se puede 
//asignar a una variable
var resultado = calculadora();
console.log(resultado);//mostrara "valor que devuelve"

calculadora(5,6);

for(var i = 1;i <= 10; i++) {
	console.log(i);
	calculadora(i, 8);
}
*/
calculadora(1,2);
calculadora(2, 5, true);
calculadora(4, 7, true);
