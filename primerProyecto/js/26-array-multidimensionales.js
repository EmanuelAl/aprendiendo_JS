
//array multidimensionales son arrays dentro de otro array
//dentro de un array se puede meter cualquier tipo de dato
var categorias = ["Acción", "Terror","Comedia","Misterio", "Drama","Aventura"];
var peliculas = ["Los vengadores","Hulk","2012"];
//array multidimencional
var cine =  [categorias, peliculas];

console.log(cine);
console.log(cine[0][1]);
console.log(cine[1][1]);

/************************************/
//operaciones con arrays

// var elemento = "";

// do{
// 	elemento = prompt("Introduce tu pelicula:");
// 	peliculas.push(elemento);//con .push añadimos el elemento al array
// }while(elemento != "ACABAR");

// peliculas.pop()//con .pop se elimina el ultimo elemento del array agregado , que seria "ACABAR"

// console.log(peliculas);

// para eliminar un elemento especifico hacemos así:

var indice = peliculas.indexOf("Los vengadores");//devuelve el indice donde se encuentra, si no la encuentra devuelve -1
 if(indice > -1){
 	peliculas.splice(indice, 2);// a partir del indice que le indicamos borrara los pasos que le indiquemos, si ponemos 1 , pues borra un elemento desde el indice indicado
 	//si ponemos peliculas.splice(indice, 2); nos borra dos elementos , desde el indice indicado, por lo cual eliminaria dos peliculas dentro del array
 }

 console.log(peliculas);


 /*************************************/
 //convertir arrays a una cadena de string:

 var peliculas_string = peliculas.join();// lo separa por comas a los elementos al convertirlos a string
  console.log(peliculas_string);
/*************************************/
//tambien se puede hacer a la inversa y convertir una cadena de string a un array así:
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);


/*******************************************/
// ORDENAR ARRAYS:

categorias.sort();//ordena alfabeticamente(a-z) y por nro (de menor a mayor)


var numeros = [1, 2 ,7 ,4, 76, 100, 89,2,3 , 102];//ordena bien cuando los elementos tienen la misma cantidad de cifras 
numeros.sort();

console.log(categorias);
console.log(numeros);

categorias.reverse();//los ordena a la inversa de la Z-A
console.log(categorias);
