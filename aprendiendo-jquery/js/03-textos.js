$(document).ready(function(){
	console.log($('a').length);//cantidad de elementos
	console.log($('a'));//muestra en una lista los elementos selecionados

	reloadLinks();
	$('#add_button')
	.removeAttr('disabled')//remueve el atributo disable de la etiqueta button
	.click(function(){

		$('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>');//.val() captura el valor del input

		$('#add_link').val('');//así con .val('')  al darle click al button queda el campo input vacio
		//.val() escrito asi obtenemos el valor del elemento
		//.val('') escrito asi le damos un valos string vacio al elemento
		reloadLinks();
	});

//.append() añade al final de la lista
//.prepend( añade al comienzo 
//.before() añade antes de la lista o sea antes del elemento que seleccionamos
//.after() hace lo contrario del before , añade afuera de la lista, pero despues de la lista
});

function reloadLinks(){
	$('a').each(function(){//.each recorre la lista/array
		let that = $(this);
		//console.log($(this).attr("Href"));//obtenemos lo contenido dentro del href de la etiqueta 'a'
		let enlace = that.attr("Href");

		that.attr("target","_blank");//así se agrega el atributo target con valor _blanck a los elementos 'a'


		//para mostrar en forma de texto en el dom
		that.text(enlace);//le agrega a 'a' el texto que pasamos
	});
}