
/*
Funciones anonimas:
Es una funcion que no tiene nombre 

funcion callback:
es una funcion anonima que se pasa como parametro
a otra funcion, y esa funcion principal dentro de ella
ejecuta el codigo de la funcion anonima que le pasamos
en forma de parametro
*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1  + numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);
	return sumar;
}

sumame(5, 7, 
	function(dato){
		console.log("La suma es: ", dato);
	},
	(dato) => {
		console.log("La suma por dos es: ",(dato*2));
	});
/* funcion flecha
es lo mismo que la anonima , solo que el 'function'
se quita y despues del parametro se pone la flecha

(dato) => {
	//intrucciones
}

si lleva un solo parametro se le pueden quitar 
los paréntesis a 'dato', pero si hay dos o mas 
parámetros se debe poner entre paréntesis

*/