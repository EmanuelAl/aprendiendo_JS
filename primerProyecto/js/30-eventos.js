
//Eventos es una funcion que se ejecuta cuando sucede algo
//como cuando hacemos click a algo , 
// cuando pasamos por encima de un elemento, etc



//evento 'load' permite ejecutar el script js (que esta en el head-html) 
//solo cuando el DOM se haya cargado primero

window.addEventListener('load', ()=>{

// EVENTOS DE RATON	
	function cambiarColor(){

		let bg = boton.style.background

		if( bg == "green"){
		     boton.style.background = "red";
		}else{
			 boton.style.background = "green";
		}

		boton.style.padding = "10px";
		boton.style.border = "1px solid #CCC";
	}


	var boton = document.querySelector("#boton");

	//podemos capturar eventos poniento el atributo 'onclick=' (para un solo click)
	// o 'ondbclick='(para dobleclick),en el elemento html,
	// pero hay otra forma mas eficiente

	// CLICK
	// boton.addEventListener('evento',funcion callback);
	boton.addEventListener('click',function(){
		cambiarColor();
		this.style.border = "dashed 1px black";//this es como usar 'boton.style.border'
	});
	//de esta manera emcapsulo mas el codigo


	//MOUSE OVER (cuando pase el puntero sobre el elemento)
	//parecido a usar en css el :hover

	boton.addEventListener('mouseover', function(){
		boton.style.background = "#CCC";
	});
	// MOUSEOUT
	boton.addEventListener('mouseout', function(){
		boton.style.background = "#067";
	});

	var input = document.querySelector("#campo_nombre");
	//FOCUS

	input.addEventListener('focus', function(){
			console.log("[focus]estas dentro del input");
		input.style.background = "#067";
		//cada vez que me ubico con el puntero sobre el input 
		// y haga click dentro del campo, se aplica el focus
	});

	// BLUR
	input.addEventListener('blur', function(){
			console.log("[blur]estas fuera del input");
		input.style.background = "#fff";
		//si hago click por fuera del input se aplica el blur
	});

	//KEYDOWN
	input.addEventListener('keydown', function(){
			console.log("[keydown]pulsando esta tecla ",String.fromCharCode(event.keyCode));
		input.style.background = "#947";
		//se aplica cuando se presiona una tecla(despues 
		// de hacer click sobre el campo input)
	});
	// KEYPRESS
	input.addEventListener('keypress', function(){
			console.log("[keypress]tecla presionada ",String.fromCharCode(event.keyCode));
		input.style.background = "#947";
		//se aplica cuando se presiona una tecla(despues 
		// de hacer click sobre el campo input)
	});
	// KEYUP
	input.addEventListener('keyup', function(){
			console.log("[keyup]tecla soltada ",String.fromCharCode(event.keyCode));
		input.style.background = "#947";
		//se aplica cuando recien se suelta la tecla

	});
});//



