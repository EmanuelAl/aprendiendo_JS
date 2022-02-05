
//Localstorage

//Comprobar disponibilidad del localstorage

if(typeof(Storage) !== 'undefined'){
	console.log("localstorage disponible");

}else{
	console.log("Incompatible con Localstorage");
}

//Guardar datos en el localStorage
localStorage.setItem("titulo","Curso de js");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos

let usuario = {
	nombre: "Emanuel pepe",
	email:"pepe@hotmil.com",
	web:"pepe.com"
};
//la forma correcta de pasar un objeto al localstorage es primero 
//convirtiendo el objeto a un json string
localStorage.setItem("usuario",JSON.stringify(usuario));

//Recuperar objeto (que es un json string )se hace lo siguiente
//con el JSON.parse convierto el json string a un objeto js usable
let userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);// ya muestra como objeto nativo js
document.querySelector("#datos").append(` ${userjs.web}-${userjs.nombre}`);



//borramos el dato usuario del localStorage
localStorage.removeItem("usuario");

//limpiamos // borramos todos los datos que agregamos al localStorage
localStorage.clear();
