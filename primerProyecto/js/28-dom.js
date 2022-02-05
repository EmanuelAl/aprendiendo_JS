
//DOM - Document Object Model
/*
var caja = document.getElementById("micaja").innerHTML;//con .innerHTML obtenemos el texto y lo guardamos en la variable caja
console.log(caja);
*/

function cambiarColor(color){
	caja.style.background = color;
}
//CONSEGUIR ELEMENTOS CON SU ID CONCRETO
//var caja = document.getElementById("micaja");
//otra forma de seleccionar es 
var caja = document.querySelector("#micaja");//seleccionamos como en css

caja.innerHTML = "TEXTO DE LA CAJA DESDE JS";//reemplazamos el texto en el html

caja.style.background = "red";

caja.style.padding ="20px";
caja.style.color = "white";

caja.className = "nombreClaseNueva";//esta clase se agrega al elemento div

//CONSEGUIR ELEMENTOS POR SU ETIQUETA
var todosLosDivs = document.getElementsByTagName('div');//devuelve los tags que indicamos buscar en un array
console.log(todosLosDivs);//lo muestra en forma de array

todosLosDivs[2].style.background="blue";

var contenidoEnTexto = todosLosDivs[2].textContent;//con textContent obtenemos el texto del div y lo asignamos a la variable

console.log(contenidoEnTexto);

//tambien puede obtener el texto con .innerHTML
//pero con este metodo ademas podemos asignar un nuevo contenido para el div
todosLosDivs[2].innerHTML = "Nuevo texto en el segundo div";

// Para recorrer el array de elementos tags no se puede usar
// el .forEach ya que no lo recorrer
// tenemos que recorrer usando un for in , o , for of 

 var seccion = document.querySelector("#mi-seccion");
 var hr = document.createElement("hr");
for(valor in todosLosDivs){
	if(typeof todosLosDivs[valor].textContent === 'string'){
	var parrafo = document.createElement("p");//crea <p></p> en el DOM ,'parrafo'(var) es el nombre que le ponemos para luego manipular ese elemento <p>
	var texto = document.createTextNode(todosLosDivs[valor].textContent);//de cada iteracion se captuta el valor(String) y se asigna a 'texto'
	parrafo.append(texto);// al elemento <p>(ose a,'parrafo') le añadimos lo que contenga 'texto'
	seccion.append(parrafo);//añade el parrafo(es decir el <p></p> con lo que contenga)
	}
	
}
seccion.append(hr);

//.append() añade despues
//.prepend() añade antes 


//CONSEGUIR ELEMENTOS POR SU CLASE
var divsRojos = document.getElementsByClassName('rojo');//obtenemos todos los elementos que tengan la clase "rojo"
var divsAmarillos = document.getElementsByClassName('amarillo');

console.log(divsAmarillos);
divsAmarillos[0].style.background = "yellow";

for(valor of divsRojos){
	valor.style.background = "red";
}

/*
for(valor in divsRojos){
	//coloca este if porque salia error en la consola, ya con esto no aparece el error
	if(divsRojos[valor].claseName == 'rojo'){
		divsRojos[valor].style.background = "red";
	}
}*/
//es preferible usar el for of , ya que de esa forma no sale ningun error en consola y es menos codigo
//que esto no lo tuvo en cuenta el instructor del curso
console.log(divsRojos);




//Query selector 
//solo selecciona de unidad
// es decir no selecciona todos los elementos que 
// contengan la misma clase o id o etiqueta
//solo devuelve(o sea selecciona) el primer elemento 
//que contenga dicha clase o id  o  etiqueta 
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);

//Query selector All
// de esta manera nos devuevle un NodeList de todos los elementos <div> en el documento:
var matches = document.querySelectorAll('div');

console.log(matches);
//con document.querySelectorAll() ya podemos buscar
// todos los elementos por clase o id o etiqueta
// y nos devuelve una NodeList que seria el array
// con los elementos 