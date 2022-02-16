
$(document).ready(function(){
	
//slider
//Inicializo el bxslider
	 $('.slider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
  });

// Posts
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




});
