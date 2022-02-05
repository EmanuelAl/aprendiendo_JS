
//Parametros REST y SPREAD
/*parametro REST se declara con´'...'adelante y
sirve para capturar la cantidad de parametros restastes
que no se saben cuantos puedan llegar a ser de una
funcion, y se los guarda en un array */

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
	console.log("Fruta 1:", fruta1);
	console.log("Fruta 2:", fruta2);
	console.log(resto_de_frutas);
}
listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

//Explicacion de SPREAD
/*le pasamos a listadoFrutas() 
como primer parametro el array frutas*/
var frutas = ["Naranja", "Manzana"];//Array
listadoFrutas(frutas, "Sandia", "Pera", "Melon", "Coco");
/*esto de arriba hizo que se mostrara el array frutas
como el primer parametro y "sandia" como
el segundo, y el resto se muestras tambien en un
array porque asi definimos el REST
AHORA bien si le ponemos al primer parametro(que 
es "frutas", que es un array), los '...' delante
lo que hacemos es un SPREAD
"*/
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");
/* Con esto conseguimos que el primer y segundo
parametro de listadoFrutas() sea "Naranja" y
"Manzana" que estaban contenidos en el
 array 'frutas'*/