
//Array o arreglos o matrices , son sinonimos
//los array tienen indices y empiezan en cero
//coleccion de tipos de datos agrupados dentro de una matriz en una variable
var nombre = "Pepe robles";
var nombres = ["Pepe robles", "Juan Lopez","Manolo Garcia", "Jose Martin", 52, true];
//                 0        ,      1       ,       2       ,    3      

var lenguajes = new Array("PHP", "Js","Go", "Java","c#","C","Pascal");

console.log(nombres);//muestra todos los elementos del array
console.log(lenguajes);
console.log(nombres[2]);


console.log(nombres.length);//para ver la cantidad/longitud de elementos del array

/*
var elemento = parseInt(prompt("Que elemento del Array quieres?",0));

if(elemento >= nombres.length ){
	alert("Introduce el numero correcto menor que "+ nombres.length);

}else{
	alert("El usuario seleccionado es: "+nombres[elemento]);
}*/
//******************************************
//Para mostrar todos los elementos del array 
document.write(`<h1>Lenguajes de programacion del 2018</h1>`);
document.write(`<ul>`);

for(let i = 0; i < lenguajes.length; i ++){
	document.write(`<li> ${lenguajes[i]}</li>`);
}
document.write(`</ul>`);

//******************************************
//Para mostrar todos los elementos del array usando forEach que recibe una funcion de callback
lenguajes.forEach((elemento, indice, array)=>{//el 2do y 3ro parametros son opciones
	//el 1ro parametro se crea para que al recorrer el array tome el valor de cada iteracion
	console.log(array);
	document.write(`<li> ${indice} ${elemento}</li>`);
});//conclusion el forEach nos itera/recorre todo el array es mas facil que usar un for

/*******************************************/
//Otras formas de recorrer el array

for(elemento in nombres){//se crea dentro del for, la variable 'elemento', que tomara el valor del indice/posicion de cada elemento del array

	console.log(nombres[elemento]);//asi accedemos al valor 
}

// segunda manera :

for(elemento of nombres){//en este caso la variable 'elemento' toma directamente el valor del indice recorrido, TOMA EL VALOR

	console.log(elemento);//toma el valor de cada elemento del array
}
/****************************************/
/************************************///
//Busquedas
/*
var busquedas = lenguajes.find(function(lenguaje){
	return lenguaje == "PHP";
});

// El método find ejecuta la función callback una vez por cada índice del array hasta que encuentre uno en el que el callback 
// devuelva un valor verdadero. Si es así, find devuelve inmediatamente el valor del elemento. 
// En caso contrario, find devuelve undefined .
*/
//manera mas resumida:
 var busquedas = lenguajes.find(lenguaje => lenguaje == "PHP");
//de esta manera podemos saber si un elemento existe o no dentro de un array
console.log(busquedas);

//lo siguiente encuentra el indice del elemento y devuelve eso
busquedas = lenguajes.findIndex(lenguaje => lenguaje == "Js");
console.log(busquedas);
// El método findIndex() ejecuta la función de callback una vez por cada índice del array hasta que 
// encuentre uno donde callback devuelva un valor verdadero (eso es, un valor que fuerza un true).

// Si dicho elemento es encontrado, findIndex() inmediatamente devuelve el índice del elemento.
// Si la función callback nunca devuelve un valor verdadero (o el tamaño del array es 0), findIndex devuelve -1.


var precios =  [10, 20, 50, 80, 12];

busquedas = precios.some(precio => precio >= 20);// devuelve true si hay algun elemento que al menos cumpla la condicion del callback
console.log(busquedas);
// some()ejecuta la función callback una vez por cada elemento presente en el arreglo hasta que encuentre uno donde callback
// regrese un valor verdadero (true). Si se encuentra dicho elemento, some() retornar true inmediatamente. 
// Si no, some() regresa false. callback es invocada sólo para los índices del array que tienen valores asignados; 
// no es invocada para índices que han sido borrados oa los que nunca se les han asignado valores.