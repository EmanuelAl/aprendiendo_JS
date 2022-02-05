
/*

Mostrar todos los nros impares que hay entre dos numeros 
introducidos por el usuario
*/

var nro1 =parseInt(prompt("Introduce el primer numero", 0));
var nro2 =parseInt(prompt("Introduce el segundo numero", 0));


while(nro1 < nro2){
	nro1++;

	if(nro1%2 != 0){
		console.log("El " + nro1+ " es impar");
	}
//nro1%2 nos da el resto de dividir nro1 por 2
}