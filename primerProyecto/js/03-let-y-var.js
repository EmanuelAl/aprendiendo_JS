
//Prueba con let y var
alert("hola");

var numero = 40;/* declarar la variable en var es indicar le 
que va a tener un alcance global , no se limita al bloque donde se la declara,
podra ser utilizada desde cualquier segmento del codigo*/

/* y  declarar una variable en 'let' , significa que esa variable solo exisitira en el bloque donde 
se la declare, por ejemplo si esta dentro de un if , pues solo existira 
en ese if */
/*
var -->alcance global 
let --> se limita al bloque donde se la declara.
*/
if(true){
	numero = 50 ;
	console.log(numero);//valor va a ser 50
}
console.log(numero);//valor va a ser 50

//prueba con let
var texto = "America";

if (true) {
	let texto = "pedro";
	console.log(texto);//aqui imprimira pedro
}
console.log(texto);//pero aca america

/*las dos variables 'texto' se llaman igual,
pero solo la que se declara con let existe dentro del if, 
es decir actua a nivel de bloque,
con lo cual no hay conflicto */