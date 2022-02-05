
//operadores 
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;

alert("el resultado de la operacion es: "+ operacion);// cuando ponemos u string y luego un + estamos concatenando
console.log(numero1 == numero2);//operador de comparacion '=='devuelve true si son iguales 

// tipos de datos
//entero ,flotante,string ,booleano
var numero_entero = 44;
var cadena_texto ='hola "que"  tal ';
var booleano = false;

var numero_falso_string = "33";

console.log(booleano);
console.log(numero_falso_string + 7);// al ser un numero en forma de string al sumarle el 7 no lo estoy sumando realmente sino que lo estoy concatenando
//para que se sume hay que hacer lo sig:
console.log(Number(numero_falso_string) + 7);//muestra 40
//Number() convierte a nro el numero que está en forma de string

console.log(parseInt(numero_falso_string) + 7);//muestra 40
//parseInt() convierte el nro del string a un nro entero
//parseFloat()hace lo mismo pero lo convierte a nro flotante con coma

console.log(String(numero_entero)+7);//muestra 447
//String() sirve para convertir la variable a un string

//para saber el tipo de datos de una variable tenemos la sig funcion

console.log(typeof(numero_entero));//devuelve number
console.log(typeof(cadena_texto));//devuelve string
console.log(typeof(booleano));//devuelve boolean
console.log(typeof(numero_falso_string));//devuelve string