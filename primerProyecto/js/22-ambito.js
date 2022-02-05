
function holaMundo(texto){
	var variable_local = "texto dentro de la funcion";//variable local

	console.log(texto);
	console.log(numero);//'numero' es variable global por eso no sale error y se muestra en consola
	console.log(numero.toString());
	console.log(variable_local);
	/*
	numero.toString() esto convierte el numero a string 
	dato.toString() es un metodo
	*/
}

var numero = 12;//variable global , puede ser utilizada desde dentro de la funcion

var texto = "hola mundo soy una variable global";
holaMundo(texto);

/*console.log(variable_local); con esta sentencia sale
error porque el parametro que se pasa por mas que se
haya definido global, al estar definido dentro de una funcion
se comporta como una variable local y solo existe
dentro de la funcion, no se puede usar por fuera de 
dicha funcion