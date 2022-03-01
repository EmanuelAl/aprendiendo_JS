


//para captutar los parametros/argumentos que ingrese por el cmd
var params = process.argv.slice(2);//le pasamos 2 para que nos imprima a partir del primer elemento que ingresamos
// si pusieramos 1 nos imprime el primer elemento que seria la ruta del archivo que ejecutamos

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

var plantilla = `
La suma es: ${numero1 + numero2}
La resta es: ${numero1 - numero2}
La multiplicacion: ${numero1 * numero2}
La division: ${numero1 / numero2}
`;
/* en la consola cmd vamos a la ruta de nuestro
proyecto primero
y luego ejecutamos
node calculadora.js numero 1 numero 2 
ej:
 node calculadora.js 20  34
 
*/



console.log(numero1);
console.log(numero2);

console.log(plantilla);

//console.log(params);//me imprimira un array con los elementos capturados
console.log("hola mundo desde Node js");