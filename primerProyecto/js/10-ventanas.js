
//ALERTA
alert("esto es una alerta");

//CONFIRMACION
confirm("Estas seguro de querer continuar?");/*nos brinda 2 opciones a elegir
'aceptar' o 'cancelar'
aceptar = true
cancelar = false */
// por ejemplo 
var resultado = confirm("Estas seguro de querer continuar?");
console.log(resultado);//nos muestra si devuelve true o false

// INGRESO DATOS
var dato = prompt("¿Que edad tienes?", 18);/*asi pedimos datos
el  ', 18' despues del mensaje es por si el usuario no ingrese datos
entonces por defecto le pasamos por parametro la edad 18 de esa manera

siempre que pedimos datos con prompt() nos devuelve un string
asi que si pedimos un nro y quesieramos hacer oparaciones aritmeticas
como sumar o restar, primero debemos pasar el dato a entero o number

*/
console.log(typeof(dato));//imprime que tipo de dato es el ingresado, es un string