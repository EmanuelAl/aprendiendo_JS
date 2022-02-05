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


nombre.focus(function(){
	$(this).css("outline","2px solid green");
});

nombre.blur(function(){//cuando estamos afuera del foco
	$(this).css("outline","1px solid #aaa");
	$(this).val();//capturo el valor guardado en el input
	$("#datos").text($(this).val()).show();

	//.text('texto') es un metodo para introducir texto al elemento seleccionado
	//.show() muestra el elemento
});


});