

//JSON - Javascript Object Notation

//definimos un objeto json
let pelicula = {
	titulo: "Batman vs Superman",
	year: 2017,
	pais: 'Estados Unidos'
};

//pelicula.titulo = "Superman Begins";
console.log(pelicula.titulo);

var peliculas = [
	{titulo:"Spiderman: no way home", year: 2021, pais: "Estados Unidos"},
	pelicula
];
console.log(peliculas);


let caja_peliculas = document.querySelector("#peliculas");

for(pelicula of peliculas){
	let p = document.createElement("p");
	p.append(pelicula.titulo +"-"+ pelicula.year);
	caja_peliculas.append(p);
}