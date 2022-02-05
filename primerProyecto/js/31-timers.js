'use strict'
window.addEventListener('load',()=>{
	//Timers


	function intervalo(){
		//setInterval ejecutara el callback en el tiempo indicado
		//en forma de bucle
		let tiempo = setInterval(function(){
		console.log("Set interval ejecutado");

		let encabezado = document.querySelector("h1");
		if(encabezado.style.fontSize == "50px"){
			encabezado.style.fontSize = "20px";
		}else{
			encabezado.style.fontSize = "50px";
		}


		},1000);

		return tiempo;
	}

//variable tiempo
	let tiempo = intervalo();
	
//setTimeout ejecuta el callback una vez en el tiempo ejecutado
	let tiempo2 = setTimeout(function(){
		console.log("Set Timeout ejecutado");

	},500);


//PARA FRENAR EL BUCLE DE SETINTERVAL
	let stop = document.querySelector("#stop");

	stop.addEventListener('click',function(){
		alert("Has parado el intervalo");
		clearInterval(tiempo);//frena el set interval
	});

	let start = document.querySelector("#start");
//PARA INICIAR EL BUCLE DE SETINTERVAL
		start.addEventListener('click',function(){
			alert("Has iniciado el intervalo en bucle");
			intervalo();
		});
//

});