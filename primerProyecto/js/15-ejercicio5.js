
/*
mostrar todos los nros divisores del numero introducido
en prompt
*/
var nro = parseInt(prompt("introduce un numero",1));

for (var i = 1; i <= nro; i++) {
	
	if(nro%i == 0){
		console.log("Divisor: "+ i);
	}
}