//fetch es un metodo que nos permite hacer peticiones ajax
//  a un servidor o api rest,
//  para que nos devuelva un resultado
// (el resultado se devuelve en formato json)

//usamos jasonplaceholder(que es una api rest con datos de prueba),
// es un servicio/backend que nos devuelve datos en json, puede 
// recibir peticiones por post put get delete (que son metodos http),
// entonces es un servicio que va a recibir una informacion en json
// y nos va a devolver otra informacion en json.
// mediante esta api se van a estar agregando datos a la base de datos
// o sacando datos y para eso se hace una api.

//hoy practicamos con
//fetch (ajax) y peticiones a servicios/ apis rest


let div_usuarios = document.querySelector(".usuarios");
let div_janet = document.querySelector("#janet");
let div_profesor = document.querySelector("#profesor");
let usuarios = [];




	getUsuarios()
		.then(data => data.json())
		.then(users =>{
			usuarios = users.data;
			console.log(usuarios);
			listadoUsuarios(usuarios);
			
			// cuando se hayan listado los usuarios en pantalla
			// devuelve la llamada a getInfo() para mostrar
			// el contenido de la promesa que creamos
			 return getInfo();//devuelve una promesa
			// entonces podemos encadenar otro metodo then
			// para trabajar con lo que contiene getInfo() ya que 
			// es eso lo que devolvera el getUsuarios()

		}).then(data => {
			console.log(data);//muestra el json string


			div_profesor.innerHTML = data;

			return getJanet();//devuelve una promesa

		}).then(data => data.json())
		.then(janet =>{
				console.log(janet);

			// como en esta parte nos devuelve esto:
			// 				{
			// 	    "data": {
			// 	        "id": 2,
			// 	        "email": "janet.weaver@reqres.in",
			// 	        "first_name": "Janet",
			// 	        "last_name": "Weaver",
			// 	        "avatar": "https://reqres.in/img/faces/2-image.jpg"
			// 	    },
			// 	    "support": {
			// 	        "url": "https://reqres.in/#support-heading",
			// 	        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
			// 	    }
			// 	}
			// tenemos que acceder a "data", entonces:

				mostrarJanet(janet.data);
		}).catch(error => {//.catch() captura/devuelve el error
			console.log(error+" error en las peticiones");
			// nos daria error en casos como:
			// la url de la promesa esta mal escrita
			// cuando el servidor esta caido
			// cuando no tengamos conexion de internet
			// cuando no nos devuelva nada la peticion
		});

/*	//dentro de la promesa tenemos el metodo then
	//en el then recogemos datos.
	//recibe como parametro una funcion callback
	//la funcion callback recibe el parametro 'data' y lo convierte
	//a json , para convertir un objeto que nos llega a json directamente
	.then(data => data.json())//
	.then(users =>{
			usuarios = users.data;
			console.log(usuarios);
	});
	*/


function getUsuarios(){
	//al final usamos esta api porque la de placeholder no funciona del todo ok
	return fetch('https://reqres.in/api/users');//devuelve la promesa
}
function getJanet(){
	
	return fetch('https://reqres.in/api/users/2');//devuelve la promesa
}


function listadoUsuarios(usuarios){
	//let div_usuarios = document.querySelector(".usuarios");
	
	usuarios.map( (user, i) => {
					let nombre = document.createElement('h2');
					nombre.innerHTML = `${i} ${user.first_name} ${user.last_name}`
					div_usuarios.append(nombre);

					document.querySelector(".loading").style.display = "none";
			});
}
function mostrarJanet(user){
					
		let nombre = document.createElement('h4');
		let avatar = document.createElement('img');

		nombre.innerHTML = ` ${user.first_name} ${user.last_name}`
		avatar.src = user.avatar;
		avatar.width = '100';


		div_janet.append(nombre);
		div_janet.append(avatar);
		document.querySelector("#janet .loading").style.display = "none";
}

//cómo crear promesas

function getInfo(){

	var profesor = {
		nombre: "Victor",
		apellido: "Robles",
		url: 'https://victorroblesweb.es'
	};
	// se crea un objeto de promesa
return new Promise((resolve, reject) => {
    let profesor_string = "";
	// agregamos un retardo de 3 segundos
	setTimeout(function(){

		profesor_string = JSON.stringify(profesor); //lo convertimos a un json string
		if(typeof profesor_string != 'string' || profesor_string == '') return reject('error 1');

		return resolve(profesor_string);
	}, 3000);

	
	
	});	
}