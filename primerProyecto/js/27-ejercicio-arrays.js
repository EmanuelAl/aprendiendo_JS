
/*
1.Pida  6 numeros por pantalla y los meta en un array
2.Mostrar el array entero(todos sus elementos) en el
cuerpo de la pagina y en la consola
3.Ordenarlo y mostrarlo
4.Invertir su orden y mostrarlo
5.Mostrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario, 
que nos diga si lo encuentra y su indice
(Se valorará
el uso de funciones)
*/

function mostrarArray(elementos, textoCustom = ""){
	document.write(`<h1>Contenido del array ${textoCustom}</h1>`);
	document.write(`<ul>`);

	/*for(elemento of elementos){
	document.write(`<li> ${elemento} </li>`);
}*/
	elementos.forEach( (elemento) => {
		document.write(`<li> ${elemento} </li>`);

	});
	document.write(`</ul>`);
	}




/**************************************************
// MOSTRAR ARRAY POR CONSOLA forma 1:
var numeros = new Array(6);// se crea arreglo de 6 posiciones vacios hasta el momento
//o se puede crear el array vacio y usar .push

for(let i = 0; i <= 5; i++){
	numeros[i] = parseInt(prompt("introduce un numero", 0));
}
console.log(numeros);

*/
// MOSTRAR ARRAY POR CONSOLA forma 2 y mejor:

var numeros = [];//array vacio

for(let i = 0; i <= 5; i++){
	
	numeros.push( parseInt(prompt("introduce un numero", 0)));
	// .push agrega el elemento al final
}

// Mostrar en el cuerpo de la pagina:

mostrarArray(numeros);


/*************************/

//Mostrar array por consola:
console.log(numeros);

/***********************/
// ORDENAR Y MOSTRAR

//como son numeros hay que usar un callback en el metodo .sort()
numeros.sort(function(a, b){return a-b});//ordena numericamente en forma ascendente
//si queremos descendente en el return ponemos b-a

mostrarArray(numeros,"ordenado");

/*********************/
//INVERTIR Y MOSTRAR
numeros.reverse();
mostrarArray(numeros,"revertido");

//MOSTRAR CUANTOS ELEMENTOS TIENE UN ARRAY
document.write(`<h1>El array tiene ${numeros.length} elementos </h1>`);

//Busqueda

var busqueda = parseInt(prompt("Busca un numero", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);// devuelve el indice si el callback devuelve true

if(posicion != -1 ){
	document.write(`<H1>ENCONTRADO</H1>`);
	document.write(`<H1>Posicion de la busqueda: ${posicion}</H1><hr/>`);
}else{
	document.write(`<h1>NO ENCONTRADO</h1><hr/>`);
}