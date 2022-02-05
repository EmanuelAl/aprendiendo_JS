let fecha = new Date();//objeto de fechas

let year = fecha.getFullYear();//obtenemos año completo
let mes = fecha.getMonth();//tener en cuenta que el mes enero es igual a cero, es decir empieza a contar desde cero
let dia = fecha.getDate();//obtengo el dia
 // En JavaScript los meses van desde el cero (Enero) a once (Diciembre),
 //  los días de la semana del cero (Domingo) a seis (Sábado).
let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();
let textoHora =`
	El año es: ${year}
	El mes es: ${mes}
	El dia es: ${dia}
	La hora es: ${hora}
	Los minutos son: ${minutos}
	Los segundos son: ${segundos}
`;
console.log(fecha);
console.log(textoHora);

// funciones matematicas 
// hay muchas , investigar funcion Math en javascript
console.log(Math.ceil(Math.random()*10000));
//Math.ceil() devuelve el entero mas cercano del decimal
//Math.random() devuelve un nro flotante aleatorio