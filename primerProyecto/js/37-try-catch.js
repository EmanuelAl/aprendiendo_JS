

try{//significa probar el codigo
	let year = 2022;
	alert(year);
	// tambien podriamos testear una url
	console.log(decodeURIComponent("https://youtube.com"));
	// decodeURIComponent es un metodo para validar una url , 
	// si llegara a tener simbolos raros devolvera un error

}catch(error){// y si hay un error lo captura y ejecuta 
	// el codigo que queramos emplear para el error capturado
	// simplemente podemos mostrar un alert como msj de error
	console.log(error);
	alert("ha ocurrido un error en el codigo");
}
// de esta manera ante codigos que puedan ser suceptibles a 
// tener algun fallo , pues podemos capturar el error si
// ocurriera y mostrar un mensaje de error o aviso


