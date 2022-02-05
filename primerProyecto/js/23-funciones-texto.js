
//Transformacion de textos
var numero = 444;
var texto1 = " Bienvenido al curso de javaScript de Victor Robles";
var texto2 = "es muy buen curso";

var dato = numero.toString();//metodo que pasa el dato a string
	dato = texto2.toUpperCase();//pasa a mayusculas
	dato = texto1.toLowerCase();//pasa a minusculas



console.log(dato);

//CAlcular longitud
// util para ver si existe un texto y si tiene algo dentro
//sirve para contar la cantidad de elementos que hay en una variable
//o array tambien
var nombre = "Pepe";

var array = ["hola", "mundo"];
console.log(array.length);//devuelve el nro de elementos en el array , que seran 2
console.log(nombre.length);// muestra el nro de letras en la cadena de texto

//CONCATENAR - UNIR TEXTOS

//var textoTotal = texto1 + " " + texto2;

var textoTotal = texto1.concat(" "+texto2);//metodo para concatenar
console.log(textoTotal);

/*****************************/
//Metodos de busqueda
console.log("**********************************");
var busqueda = texto1.indexOf("curso");//nos devuelve a partir de que nro de caracter aparece "curso"
//var busqueda = texto1.lastIndexOf("curso");nos devuelve a partir de que nro de caracter se encuentra la ultima palabra "curso"
//busqueda = texto1.search("curso");//lo mismo que usar .indexOf(), si la palabra no se encuentra devuelve -1
//busqueda = texto1.match("curso");/*devuelve una coleccion de datos en forma de array, donde informa la palabra buscada, 
/* y el nro de caracter donde comienza la palabra y la frase donde se busco la palabra, informa solo la primer coincidencia*/
//busqueda = texto1.match(/curso/g); asi buscara todas las coincidencias
/*busqueda = texto1.substr(14,5);/*sirve para sacar una porcior del string,si queremos sacar ´curso', ponemos a partir de qué 
nro de caracter, seguido de la cantidad de caracteres o letras a sacar, lo cual nos arranca de texto1 la palabra 'curso' */
//busqueda = texto1.charAt(44);/*le pasamos el indice del caracter(letra) que queremos sacar, con 44 nos devuelve´'R' de 'Robles'*/
//busqueda = texto1.startsWith("Bienvenido");//si encuentra al comienzo del string la palabra/caracteres que le indicamos devolverá true, sino devolverá false
//busqueda = texto1.endsWith("Victor Robles");//si encuentra al final del string la palabra/caracteres que le indicamos devolverá true, sino devolverá false
busqueda = texto1.includes("Victor Robles");//si encuentra en el string lo indicado, devuelve true, sino false
console.log(busqueda);

/*****************************/
//funciones/metodos de reemplazo, metodos de reemplazo en variables string

//busqueda = texto1.replace("javaScript", "Synfony");//reemplaza el primer texto parametro, por el segundo texto parametro
//busqueda = texto1.slice(14,24);//indicamos desde y hasta donde queremos que recorte la frase string
//busqueda = texto1.split();//devuelve la frase en forma de array 
//busqueda = texto1.split(" ");//así indicamos que cada palabra se separe por el espaciado indicado entre comillas
busqueda = texto1.trim();//nos elimina los "espacio" que haya al comienzo y final del string 
console.log(busqueda);
