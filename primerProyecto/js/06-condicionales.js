
//condicional IF
//el: si A es igual a B entonces haz algo
//si se cumple lo que esta dentro de los parentesis se ejecuta lo que haya entre las llaves

var edad = prompt("Dime tu edad");
var nombre = prompt("Dime tu nombre");
 
if(edad >= 18) {
	alert("eres mayor de edad "+ nombre);
	//dentro de un IF si quisieramos podemos anidar otro IF
	if((edad > 18)&& (edad <= 33)){
		alert("y todavia eres mileneal ");
	}else if(edad >= 70){
		alert("estas un poco viejito");
	}else{
		alert("ya no eres mileneal");
	}
}else {
	alert("eres es un menor de edad "+ nombre);
}

// el 'else' se declara una vez, mientas 'else if' se puede usar las veces que queramos


/*
Operados lógicos 
AND        &&
OR         || 
Negacion   !
*/
var year = 2022;
//negacion

if(year != 2021){// si los operandos no son igual es true 
	console.log("year no es igual a 2022");
}
//AND
if( year >= 2000 && year <=2022){
	console.log("Estamos en la era actual");
}else{
	console.log("Estamos en la era post moderna");
}
//OR
if(year==2008 ||( year >= 2018 && year == 2028)){
	console.log("el año termina en 8");
}else{
	console.log("AÑO NO REGISTRADO");
}