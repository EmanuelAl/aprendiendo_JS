
/*

CAlculadora
 -que pida 2 numeros por pantalla
 -Si ingresamos un nro incorrecto, volver lo a pedir
 -mostrar en el cuerpo de la pagina. en una alerta y por la
 consola el resultado de sumar, restar, multiplicar y dividir
 esas dos cifras.
*/

var nro1 =parseInt(prompt("Introduce el primer numero", 0));
var nro2 =parseInt(prompt("Introduce el segundo numero", 0));

while(nro1 < 0 || nro2 < 0 || isNaN(nro1) || isNaN(nro2) ){
	nro1 =parseInt(prompt("Introduce el primer numero", 0));
	nro2 =parseInt(prompt("Introduce el segundo numero", 0));
}

var resultado= "La suma es: "+(nro1+nro2)+" <br>"+
				"La resta es: "+(nro1-nro2)+"<br>"+
				"La multiplicacion es: "+(nro1*nro2)+"<br>"+
				"La division es: "+(nro1/nro2)+"<br>";
//creamos otra variable y alteramos los <br< para
// que se muestren bien en el alert y console
var resultadoCMD= "La suma es: "+(nro1+nro2)+"\n"+
				"La resta es: "+(nro1-nro2)+"\n"+
				"La multiplicacion es: "+(nro1*nro2)+"\n"+
				"La division es: "+(nro1/nro2)+"\n";				

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);