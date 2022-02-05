

window.addEventListener('load',function(){

	console.log("dom cargado");

	let formulario = document.querySelector("#formulario");

	let box_dashed = document.querySelector(".dashed");
	//box_dashed.style.display = "none";// para que este oculto 

	formulario.addEventListener('submit',function(){
		console.log("Evento submit capturado");
		box_dashed.style.display = "block";//para que aparezca cuando se haga el submit

		let nombre = document.querySelector("#nombre").value;
		let apellido = document.querySelector("#apellido").value;
		let edad = parseInt(document.querySelector("#edad").value);


		//let datosUsuario = [nombre,apellido,edad];

		if(nombre.trim()== null || nombre.trim().length == 0){
			alert("El nombre no es valido");
			document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
			document.querySelector("#error_nombre").style.color="red";
			return false;
		}else{
			document.querySelector("#error_nombre").style.display="none";

		}
		if(apellido.trim()== null || apellido.trim().length == 0){
			alert("El apellido no es valido");
			document.querySelector("#error_apellido").innerHTML = "El apellido no es valido";
			document.querySelector("#error_apellido").style.color="red";
			return false;
		}else{
			document.querySelector("#error_apellido").style.display="none";
		}
		if(edad == null || edad <= 0 || isNaN(edad)){
			alert("La edad no es valida");
			document.querySelector("#error_edad").innerHTML = "La edad no es valida";
			document.querySelector("#error_edad").style.color="red";
			return false;
		}else{
			document.querySelector("#error_edad").style.display="none";
		}





		p_nombre = document.querySelector("#p_nombre span");
		p_apellido = document.querySelector("#p_apellido span");
		p_edad = document.querySelector("#p_edad span");

		p_nombre.innerHTML = nombre;
		p_apellido.innerHTML = apellido;
		p_edad.innerHTML = edad;



		/*
		for(valor of datosUsuario){
			let parrafo = document.createElement("p");
			parrafo.append(valor);
			box_dashed.append(parrafo);
		}
		*/

	});



});