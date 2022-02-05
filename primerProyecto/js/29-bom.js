
//BOM Browser Object Model

function getBom(){
	console.log(window.innerWidth);//obtendo el ancho de la ventana(viewport)
	console.log(window.innerHeight);//nos retornara un valor de tipo entero, que representara (en pixeles) la altura del viewport.

	console.log(screen.width);//Retorna la anchura de la pantalla.
	console.log(screen.height);//Retorna la altura de la pantalla en pixels

	console.log(window.location);//devuelve el objeto location entre otras cosas la url
	//investigar:
//hay mas propiedades del objeto Screen 
//hay mas propiedades del objeto window
}

function redirect(url){
	window.location.href = url;//accedemos a la url actual y le asignamos otra , para que nos redirija desde la consola
}

function abrirVentana(url){
	// no se puede ejecutar las siguientes intrucciones juntas,es una a la vez
	//window.open(url);//nos abre en otra ventana la url que le pasamos
	window.open(url,"","width=400, height=300");//se abre la ventana aparte con el acnho y alto indicados
	//window.open([url],[nombre_de_la_ventana],[configuracion_ventana]);
}