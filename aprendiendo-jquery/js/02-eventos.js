$(document).ready(function(){


	// MouseOver y MouseOut

	let caja = $("#caja");
	/*
	caja.mouseover(function(){
		$(this).css("background","red");
	});

	caja.mouseout(function(){
		$(this).css("background","green");
	});
	*/
	// Hover
	function cambiaRojo(){
		$(this).css("background","red");
	}
	function cambiaVerde(){
		$(this).css("background","green");
	}
	caja.hover(cambiaRojo,cambiaVerde);


	//Click, Doble click

	caja.click(function(){
		$(this).css("background","blue")
			   .css("color","white");
	});

	caja.dblclick(function(){
		$(this).css("background","pink")
			   .css("color","yellow");
	});

	//Focus y blur 
	let nombre = $("#nombre");
	let datos = $("#datos");

	nombre.focus(function(){
		$(this).css("outline","2px solid green");
	});

	nombre.blur(function(){//cuando estamos afuera del foco
		$(this).css("outline","1px solid #aaa");
		$(this).val();//capturo el valor guardado en el input
		datos.text($(this).val()).show();

		//.text('texto') es un metodo para introducir texto al elemento seleccionado
		//.show() muestra el elemento
	});
//mousedown y mouseup
	datos.mousedown(function(){
		$(this).css("border-color","grey");
	});
	datos.mouseup(function(){
		$(this).css("border-color","black");
	});
// Mousemove sigue el movimiento del mouse
	$(document).mousemove(function(){
	/*	let sigueme = $("#sigueme");
		console.log("En X: "+event.clientX);//coordenadas en x del mouse
		console.log("En Y: "+event.clientY);//coordenadas en y del mouse
		sigueme.css("left",event.clientX);
		sigueme.css("top",event.clientY);
	*/	
		//simplificamos el codigo anterior asi:
		$("#sigueme").css("left",event.clientX)
					 .css("top",event.clientY);
		$('body').css("cursor","none");//para que no aparezca en el body la fecla del cursor,
		 // esto haria como que la "esfera" del div fuera nuestro puntero del mause
	});
});