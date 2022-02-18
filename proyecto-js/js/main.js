$(document).ready(function(){
	
	if(window.location.href.indexOf('index') > -1){//si estamos ubicados en la pagina index.html entonces se ejecutara el codigo
	//slider
	//Inicializo el bxslider
		 $('.slider').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200,
	  	});
    }
// Posts

	if(window.location.href.indexOf('index') > -1){//si estamos ubicados en la pagina index.html entonces se ejecutara el codigo
			let posts = [
			{
				title: "prueba de titulo 1",
				date: 'Publicado el dia ' + moment().date()+ ' de '+moment().format("MMMM")+ ' del '+moment().format("YYYY"),
				content: "Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Sint dolorem illo aliquid. Id, ipsa, nostrum! Recusandae enim voluptas pariatur earum deserunt autem quisquam maxime voluptatibus odit, culpa corporis est eaque! Est earum modi consectetur reprehenderit, fugiat maiores obcaecati dignissimos nulla suscipit voluptates, ducimus deleniti mollitia veniam corrupti enim accusamus corporis magnam impedit id saepe totam incidunt temporibus aspernatur? Tempore, impedit."
			},
			{
				title: "prueba de titulo 2",
				date: 'Publicado el dia ' + moment().date()+ ' de '+moment().format("MMMM")+ ' del '+moment().format("YYYY"),
				content: "Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Sint dolorem illo aliquid. Id, ipsa, nostrum! Recusandae enim voluptas pariatur earum deserunt autem quisquam maxime voluptatibus odit, culpa corporis est eaque! Est earum modi consectetur reprehenderit, fugiat maiores obcaecati dignissimos nulla suscipit voluptates, ducimus deleniti mollitia veniam corrupti enim accusamus corporis magnam impedit id saepe totam incidunt temporibus aspernatur? Tempore, impedit."
			},
			{
				title: "prueba de titulo 3",
				date: 'Publicado el dia ' + moment().date()+ ' de '+moment().format("MMMM")+ ' del '+moment().format("YYYY"),
				content: "Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Sint dolorem illo aliquid. Id, ipsa, nostrum! Recusandae enim voluptas pariatur earum deserunt autem quisquam maxime voluptatibus odit, culpa corporis est eaque! Est earum modi consectetur reprehenderit, fugiat maiores obcaecati dignissimos nulla suscipit voluptates, ducimus deleniti mollitia veniam corrupti enim accusamus corporis magnam impedit id saepe totam incidunt temporibus aspernatur? Tempore, impedit."
			},
			{
				title: "prueba de titulo 4",
				date: 'Publicado el dia ' + moment().date()+ ' de '+moment().format("MMMM")+ ' del '+moment().format("YYYY"),
				content: "Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Sint dolorem illo aliquid. Id, ipsa, nostrum! Recusandae enim voluptas pariatur earum deserunt autem quisquam maxime voluptatibus odit, culpa corporis est eaque! Est earum modi consectetur reprehenderit, fugiat maiores obcaecati dignissimos nulla suscipit voluptates, ducimus deleniti mollitia veniam corrupti enim accusamus corporis magnam impedit id saepe totam incidunt temporibus aspernatur? Tempore, impedit."
			},
			{
				title: "prueba de titulo 5",
				date: 'Publicado el dia ' + moment().date()+ ' de '+moment().format("MMMM")+ ' del '+moment().format("YYYY"),
				content: "Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Sint dolorem illo aliquid. Id, ipsa, nostrum! Recusandae enim voluptas pariatur earum deserunt autem quisquam maxime voluptatibus odit, culpa corporis est eaque! Est earum modi consectetur reprehenderit, fugiat maiores obcaecati dignissimos nulla suscipit voluptates, ducimus deleniti mollitia veniam corrupti enim accusamus corporis magnam impedit id saepe totam incidunt temporibus aspernatur? Tempore, impedit."
			},
			{
				title: "prueba de titulo 6",
				date: 'Publicado el dia ' + moment().date()+ ' de '+moment().format("MMMM")+ ' del '+moment().format("YYYY"),
				content: "Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Sint dolorem illo aliquid. Id, ipsa, nostrum! Recusandae enim voluptas pariatur earum deserunt autem quisquam maxime voluptatibus odit, culpa corporis est eaque! Est earum modi consectetur reprehenderit, fugiat maiores obcaecati dignissimos nulla suscipit voluptates, ducimus deleniti mollitia veniam corrupti enim accusamus corporis magnam impedit id saepe totam incidunt temporibus aspernatur? Tempore, impedit."
			}
			];


			
			posts.forEach((element, index ) => {
				let post = `
				<article class="post">
				    <h2>${element.title}</h2>
					<span class="date">${element.date}</span>
					<p>${element.content}	
					</p>
					<a href="#" class="button-more">Leer más</a>
				</article>
				`;

				$("#posts").append(post);
			});
    }


	// para cambiar los temas de la pagina
	let theme = $("#theme");
	$("#to-green").click(function(){
		theme.attr("href","css/green.css");
	});
	$("#to-red").click(function(){
		theme.attr("href","css/red.css");
	});
	$("#to-blue").click(function(){
		theme.attr("href","css/blue.css");
	});

	//Scroll suavizado al subir

	$(".subir").click(function(e){
		e.preventDefault(); // para que no nos redirija a ningun lado el enlace
		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

 /*
 el scroll suavizado con css 
 ya que lo tiene tambien implementado
 en forma nativa solo poniendo
html {
  scroll-behavior: smooth;
}
 */

 	//login falso 
 	//usamos local storage 
 	$("#login").submit(function(){
 		let form_name = $("#form_name").val();

 		localStorage.setItem("form_name", form_name);
 	});

 	let form_name = localStorage.getItem("form_name");
 	
 	if(form_name != null && form_name != "undefined"){
 		let about_parrafo = $("#about p");

 		about_parrafo.html(`<br><strong>Bienvenido ${form_name}</strong>`);
 		about_parrafo.append('<a href="#" id="logout">Cerrar sesión</a>');	

 		$("#login").hide();// esto hace que no se vea en pantalla

 		$("#logout").click(function(){
 			localStorage.clear();// borra todas las variables que se hayan guardado en la memoria del navegador, o sea en el localStorage
 			location.reload(); //recarga la ventana del navegador, esto ya es parte del concepto BOM browser object model

 		});
 	}
 	//acordeon
 	if(window.location.href.indexOf('about') > -1){//si estamos ubicados en la pagina about.html entonces se ejecutara el codigo
 		$("#acordeon").accordion();
	}

	//Reloj
	if(window.location.href.indexOf('reloj') > -1){//si estamos ubicados en la pagina reloj.html entonces se ejecutara el codigo
 		
 		setInterval(function(){
 			let reloj = moment().format("h:mm:ss");
 			console.log(reloj);
 			$("#reloj").html(reloj);
 		},1000);

 	 }


 	 //Validacion del form

 	 if(window.location.href.indexOf('contact') > -1){
 	 	// para mostrar calendario de fechsa
 	 	$("form input[name='date']").datepicker({
 	 		dateFormat:'dd-mm-yy'
 	 	});

 	 	// $.validate({
 	 	// 	lang: 'es'	
 	 	// });

 	 	// $("#form_contact").validate({
 	 	// 	lang: 'es'
 	 	// });


 	 	  $("#form_contact").validate({
		    rules: {
		      name : {
		        required: true,
		        minlength: 3
		      },
		      last_name : {
		        required: true,
		        minlength: 3
		      },
		      age: {
		        required: true,
		        number: true,
		        min: 18
		      },
		      email: {
		        required: true,
		        email: true
		      },
		      sex: {
		        required: true
		       	},
		      date: {
		        required: true
		       		}

		     },
		     messages : {
				name: {
				   required: "Debe completar el campo nombre",
				   minlength: "El nombre debe tener al menos 3 caracteres"
				 },
				 last_name: {
				   required: "Debe completar el campo apellido",
				   minlength: "El apellido debe tener al menos 3 caracteres"
				 },
				age: {
				   required: "Por favor ingrese su edad",
				   number: "Por favor, introduzca su edad como un valor numérico",
				   min: "Debe tener al menos 18 años de edad"
				},
				email: {
				   required: "Debe completar el campo email",
				   email: "El correo electrónico debe tener el formato: abc@domain.tld"
				},
				sex: {
		        	required: "Por favor seleccione su sexo"
		       	},
		        date: {
		        	required: "Por favor ingrese su fecha de nacimiento"
		       		}
   		 	}
   		 
  		});//cierre del validate()



 	}//cierre del if 


});
