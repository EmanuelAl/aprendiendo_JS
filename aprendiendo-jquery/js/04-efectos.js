// Explicacion en video 102.Efectos en JQuery
$(document).ready(function(){
	let caja = $("#caja");
	//caja.hide();
/*
	$("#mostrar").click(function(){
		caja.show();//me hace visible el div en el dom
	});
	$("#ocultar").click(function(){
		caja.hide();//me oculta el div en el dom
	});
*/
/**************************/
	//	HACIENDO UN TOGGle

	$("#mostrar").hide();//para que no aparezca el boton mostrar al cargar el dom

	$("#mostrar").click(function(){
		$(this).hide();//desaparece el boton mostrar
		$("#ocultar").show();//se muestra solo el boton ocultar
		caja.show('slow');//me hace visible el div en el dom
		//caja.fadeIn('slow');// aparece el div
		//caja.fadeTo('slow',1);
		//caja.slideDown('slow');//se despliega hacia abajo mostrando el div
	});
	$("#ocultar").click(function(){
		$(this).hide();//desaparece el boton mostrar
		$("#mostrar").show();//se muestra solo el boton ocultar
		caja.hide('slow');//me oculta el div en el dom
		//caja.fadeOut('slow');//desaparece el div
		//caja.fadeTo('slow', 0.2);
		//caja.slideUp('slow');//se despliega hacia arriba ocultando el div
	});	
/*
a los sig. metodos se les puede dar valores , 
para hacer su "degradado",serian como 
velocidades para hacer su cometido :

METODOS .SHOW Y .HIDE
aparece/desaparece lo selecionado 
escalando el tamaño {
	.show('parametro') parametro= slow/fast/normal
	.hide('parametro') parametro= slow/fast/normal
}
METODOS .FADEIN Y FADEOUT
aparece/desaparece lo seleccionado 
haciendo un efecto de "desvanecimiento" {
	.fadeIn('parametro') parametro= slow/fast/normal
	.fadeOut('parametro') parametro= slow/fast/normal
}
METODOS .FADETO 
nos permite que lo seleccionado vaya de un
estado a otro, recibe dos parametros,uno es la
velocidad(slow/fast/normal), y el segundo
es la opacity(del 0 al 1)

.fadeTo('slow/fast/normal','opacity')
*/

/***************************************/
/*HACER UN TOGGle CON MENOS CODIGO
USANDO EL METODO TOGGLE*/
	$("#todoEnUno").click(function(){
		//$('#caja').toggle('fast');//con este metodo
		// hacemos que cuando se capture un click
		// desaparezca lo seleccionado, y si
		// se vuelve a dar otro click aparezca
		// de nuevo lo seleccionado
		//$('#caja').fadeToggle('fast');
		caja.slideToggle('fast');

	// LO MISMO SE PUEDE HACER DANDO LE  OTROS Efectos
	// .fadeToggle('slow/fast/normal');
	// .slideToggle('slow/fast/normal');efecto de despliegue
	 });

/****************************************/
// ANIMACIONES

// .animate({propiedades css en formato json},'slow/fast/normal');
	$("#animar").click(function(){

		caja.animate({
					  marginLeft: '500px',
					  fontSize: '40px',
					  height: '110px'
					}, 'slow')
		.animate({
			borderRadius: '900px',
			marginTop: '50px'
		},'slow')
		.animate({
			borderRadius: '0px',
			marginLeft: '0px'
		},'slow')
		.animate({
			borderRadius: '100px',
			marginTop: '0px'
		},'slow')
		.animate({
					  marginLeft: '500px',
					  fontSize: '40px',
					  height: '110px'
					}, 'slow');
	});

});