$(document).ready(function(){
	//LOAD
	//.load() recibe una url donde tomara el html o json
	//$("#datos").load("https://reqres.in/");

	//Get y Post

	$.get("https://reqres.in/api/users?page=2",{page: 2},function(response){

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

});