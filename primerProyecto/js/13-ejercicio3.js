
/*

Hacer un programa que muestre todos los numeros  que existen
entre los dos numeros que ingresara el usuario,
*/

var nro1 = parseInt(prompt("Introduce el primer numero", 0));
var nro2 = parseInt(prompt("Introduce el segundo numero", 0));

document.write("<h1>De "+nro1+" a "+nro2+ " están los numeros:</h1>")

for(var i = nro1; i <= nro2; i++){
	document.write(i+"<br/>");
}