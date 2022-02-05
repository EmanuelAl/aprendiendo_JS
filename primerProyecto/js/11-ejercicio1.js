
/*
Programa que pida dos numeros y que nos diga cual es el mayor,
el menor y si son iguales

PLUS: Si los numeros no son un numero o 
son menores o igual a cero,
nos lo  vuelva a pedir
*/

var numero1= parseInt(prompt("Introduce el primer numero ", 0));
var numero2= parseInt(prompt("Introduce el segundo numero ", 0));

console.log(numero1 , numero2);
//este while lo hacemos para comprobar que se coloque nros validos
while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
	numero1= parseInt(prompt("Introduce el primer numero ", 0));
	numero2= parseInt(prompt("Introduce el segundo numero ", 0));
}
/*
la funcion isNaN() devuelve 'true' si lo que recibe por parametro
no es un numero, si fuera un nro el parametro devuelve false.
*/
if(numero1 == numero2){
	alert("LOS NUMEROS SON IGUALES");
}else if(numero1 > numero2){
	alert("El NUMERO MAYOR ES: "+ numero1);
	alert("El NUMERO MENOR ES: "+ numero2);
}else if(numero2 > numero1){
	alert("El NUMERO MAYOR ES: "+ numero2);
	alert("El NUMERO MENOR ES: "+ numero1);
}else{
	alert("INTRODUCE NUMEROS CORRECTOS");
}