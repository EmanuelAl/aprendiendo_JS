$(document).ready(function(){
	console.log("estamos listos");

	//selectores de ID
$("#rojo").css("background","red")
		  .css("color","white");

$("#amarillo").css("background","yellow")
			  .css("color","green");

$("#verde").css("background","green")
		   .css("color","while");

//Selectores de clases
let mi_clase = $(".zebra").css("padding", "5px");//añadimos padding a los que tiene la calse zebra

//selector clase// evento click
$(".sin_borde").click(function(){
	console.log("click dado");
	$(this).addClass("zebra");
});

//selector de etiquetas
let parrafo = $("p").css("cursor","pointer");

parrafo.click(function(){
	let that = $(this);

	if(!that.hasClass('grande')){//hasClass/tieneClase metodo para preguntar si el elemento seleccionado tinee la clase indicada
		that.addClass("grande");

	}else{
		that.removeClass("grande");
	}
});
// selectores de atributo

$('[title="Google"]').css('background','#ccc');
$('[title="Facebook"]').css('background','blue');

//*************** find y parent ********************

$('p, a').addClass('margen-superior');



let busqueda = $('#caja').find('.resaltado');
// seleccionamos el div caja, una vez que estamos en caja, con .find buscamos
// los elementos del DOM dentro de #caja que tienen la clase '.resaltado'
// nos devuelve una lista de aquellos elementos que tienen 
// esa clase

console.log(busqueda);

// .parent() nos permite desde donde estamos seleccionando,o sea,
// desde donde nos "paramos", nos permite salir hacia una etiqueta
// anterior(hacia atras, nos ubica en la etiqueta padre de la etiqueta
// actual donde nos ubicamos actualmente). por ejemplo:
// si estamos en el div con id #caja, la etiqueta padre es body 
// , si usamos $(#caja).parent() , nos estariamos ubicando/'posicionando'
// en el body, ya que nos regresa hacia una etiqueta padre o sea una 
// etiqueta hacia atras de la actual que estabamos.

let busqueda2 = $('#caja .resaltado').eq(0).parent().parent().parent().find('[title="Google"]');
	//con .eq(num) se indica en que elemento se está posicionando


	console.log(busqueda2);

busqueda3 = $('#elemento2').parent().parent().find('.resaltado');

	console.log(busqueda3);
});