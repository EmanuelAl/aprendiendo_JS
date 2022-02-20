// con la palabra reservada type creamos tipos de datos
// personalizados
type alfanumerico = string | number;

let cadena2: alfanumerico = "string o number";
cadena2= 12;

//String o number
let cadena: string | number = 'Emanuel Alderete';
// es decir que la variable cadena ahora puede ser de 
// dos tipos de datos , string o number,
// pero no otros tipos de datos
cadena = 12;
//number 
let numero: number = 12;
//boleano
let verdadero_falso: boolean = true;
//Any / cualquier cosa
let cualquiera: any = 'hola';// se le puede asignar cualquier tipo de valor
cualquiera = 77;//ahora si se puede asignar y no saltaria errores si el valor no coincide con el tipo de datos

//Arrays
var lenguajes: Array<any> = ['PHP','JS','css',12];
//otra forma de definir un array
let years: number[] = [12, 13, 14];
// let years: any[] = [12, 13, 14,'hola']; otro ejemplo


console.log(cadena,numero,verdadero_falso,cualquiera,lenguajes, years);

