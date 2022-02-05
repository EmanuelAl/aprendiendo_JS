

let formulario = document.querySelector("#form-peliculas");

formulario.addEventListener('submit',function(){
	console.log("se ejecuta");

	let titulo = document.querySelector("#addpelicula").value;


	if(titulo.length >=1){
	localStorage.setItem(titulo,titulo)
	}

	
});
let ul = document.querySelector("#peliculas-list");
for(indice in localStorage){
	console.log(localStorage[indice]);
	if(typeof localStorage[indice] === 'string'){
		let li = document.createElement("li");
		li.append(localStorage[indice]);
		ul.append(li);
	}
}


let formularioBorrar = document.querySelector("#formBorrarPeliculas");

formularioBorrar.addEventListener('submit',function(){
	console.log("se ejecuta borrar");

	let titulo = document.querySelector("#borrarPelicula").value;


	if(titulo.length >=1){
	localStorage.removeItem(titulo);
	}

	
});