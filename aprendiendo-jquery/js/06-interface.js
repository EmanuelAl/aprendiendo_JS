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



	//Drop
	$("#elemento-movido").draggable();//para mover el elemnto que se va a poner sobre el area
	$("#area").droppable({
		drop: function(){
			console.log("has soltado algo dentro del area");
		}
	});


	//Efectos en Jquery ui-
	// recomendacion es ver la documentacion
	$("#mostrar").click(function(){//evento click

		//$(".caja-efectos").toggle("fade");
		//$(".caja-efectos").fadeToggle();
		//$(".caja-efectos").effect("explode");
		//$(".caja-efectos").toggle("explode");
		//$(".caja-efectos").toggle("blind");
		//$(".caja-efectos").toggle("slide");
		//$(".caja-efectos").toggle("drop");
		//$(".caja-efectos").toggle("fold");
		//$(".caja-efectos").toggle("puff");
		//$(".caja-efectos").toggle("scale");
		//$(".caja-efectos").toggle("shake");
		//$(".caja-efectos").toggle("shake",'slow');con indicador de velocidad
		//$(".caja-efectos").toggle("shake", 400);con indicador de tiempo
		$(".caja-efectos").toggle("shake", 4000);


		// referencia:	
		//$("seleccion").toggle("efecto",{algo en json},"velocidad/tiempo/")
	});

	//metodo tooltips
	$(document).tooltip();//cuando el curso se posa sobre el enlace muestra lo que contiene en el atributo title del enlace

	//Dialog
	$("#lanzar-popup").click(function(){
			$("#popup").dialog();//aparece un popup al hacer click en el boton
			
	});
	
});
	


	