$(document).ready(function(){
	//Mover elemento por la pagina
	$(".elemento").draggable();
	//REdimensionar
	$(".elemento").resizable();

	//Seleccionar elementos de una lista
	//$(".lista-seleccionable").selectable();



	//ordenar elementos de una lista
	/*para ordenar hay que "comentar" la linea
	de codigo del selectable, o no se aplica
	los cambios de sortable*/
// 	$(".lista-seleccionable").sortable();
// });
	/*sorteable() tiene un propiedad update
	que se le puede pasar un callback
	para capturar cuando el evento se aplico
	por ejemplo.
*/
	$(".lista-seleccionable").sortable({
		update: function(event,ui){
			console.log("ha cambiado la lista");
		}
	});
});
	


	