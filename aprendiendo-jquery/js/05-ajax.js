$(document).ready(function(){
	//LOAD
	//.load() recibe una url donde tomara el html o json
	//$("#datos").load("https://reqres.in/");

	//Get y Post

	$.get("https://reqres.in/api/users",{page: 2},function(response){

		/*parte del json array que nos llega :
			"data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        mas objetos...
         ];
		
		para acceder al objeto que es un elemento del array de objetos
		ponemos response.data , ya que "data" es el nombre del Array que contiene 
		los objetos
		*/
		//accedemos al array de objetos y lo recorremos con fonEach
		response.data.forEach((element, index) =>{
			//element adoptara el objeto recorrido para asi acceder a sus propiedades
			$("#datos").append(`<p>${element.first_name} ${element.last_name}</p>`)	
		});

	});

	//Post para enviar un json a la api

	let usuario = {
		name: 'Emanuel',
		pais: 'Argentina'
	};
	// .post(url,Obj,funcionCallback)
	$.post("https://reqres.in/api/users",usuario,function(response){
			console.log(response);
	});

	//trabajando con post y el formulario 
	$("#formulario").submit(function(e){
		e.preventDefault();//para capturar el evento y hacer que no nos redirija a otra pagina
		let usuarioForm = {
		name: $('input[name="name"]').val(),
		pais: $('input[name="pais"]').val()
		};
		//console.log(usuarioForm);
	// .post(url,Obj,funcionCallback)
	/*
		$.post($(this).attr("action"),usuarioForm,function(response){
			console.log(response);
		}).done(function(){
			alert("usuario añadido correctamente");
		});
	*/	
		//manera mas facil de hacer request y response
		//o sea de hacer peticion y respuesta , es con $.ajax
		// tiene bastantes propiedades
		$.ajax({
			type: "POST",//Tipo de peticion GET/POST..etc
			url: $(this).attr("action"),
			data: usuarioForm,
			beforeSend: function(){//prop. para mostrar algo o hacer algo antes de enviar la peticion-callbacks
				console.log("enviando usuario...");
			},
			success: function(response){//prop. para ejecutar algo cuando se completo la peticion-callbacks
				console.log(response);
			},
			error: function(){// para mostrar algo que sea error o mostrar algun error-callbacks
				console.log("ha ocurrido un error");
			},
			timeout: 1000 // ms que esperara, es el tiempo necesatio como para que nos llegue la respuesta de la piticion y luego ejecutar los otros callbacks o error
		});

		return false;//tambien para hacer que no nos redirija a otro lado
	});

});