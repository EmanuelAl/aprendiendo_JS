/* modulos
se usan para organizar mejor el codigo 
para tener una mejor abstraccion
para que sea sencillo mantener codigo etc
*/
module Tienda{// en el modulo podemos tener la cantidad de clases con sus metodos que queramos
    export class Ropa {
        constructor(public titulo: string){
            alert(titulo);
        }
    }
    export class Informatica {
        constructor( public titulo: string){
            alert('Tienda de Tecnologia: '+titulo);
        }
    }
}

import Informatica = Tienda.Informatica;
let cargar_informatica = new Informatica('supertienda');



/*decorador */
//agrega funcionalidad a la clase donde sea aplicada
function arranque(lanzar: string){
    return function(target: Function){
        target.prototype.lanzamiento = function(): void{
            alert(lanzar);
        }
    }
}
//aplicando decorador a clase padre
@arranque('Lanzamiento del curso de NodeJs y Angular')
/* Clase Padre */
class Programa {
    public nombre: string;
    public version: number;

    getnombre(){
        return this.nombre;
    }
    setNombre(nombre: string){
        this.nombre = nombre;
    }
    getVersion(){
        return this.version;
    }
    setVersion(version: number){
        this.version = version;
    }
}

/*********************** */
let programaConDecorador = new Programa();
programaConDecorador.lanzamiento();
/***************************** */
/* Clase Hija */
//con extends NombreClasePAdre indicamos que la clase va a heredar de la clase padre indicada
class EdithVideo extends Programa{
    public timeline: number;

    getTimeline(){
        return this.timeline;
    }

    setTimeline(timeline: number){
        this.timeline = timeline;
    }

    getAllData(): string{
        return this.getnombre()+" - "+this.getVersion()+" - "+this.getTimeline();
    }
}
/**instanciando una clase hija */
var editor = new EdithVideo();
editor.setNombre('Cantasia Studio');
editor.setVersion(1);
editor.setTimeline(4000);

console.log(editor.getAllData());

/* logica del formulario */

let programas: any = [];

function guardar(){
    let nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

    let programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(1);

    programas.push(programa);
    /* para listarlos : */
    let list = "";
   
    for(let i = 0 ;i < programas.length; i++){
        list = `${list} <li> ${programas[i].getnombre()} </li>`;
    }

    let listado = <HTMLElement>document.getElementById("listado");
    listado.innerHTML = list;

    //para borrar el campo input y quede limpio, despues de presionar boton guardar:
    (<HTMLInputElement>document.getElementById("nombre")).value = "";


/* equivalente para listar:
    for(let i = 0 ;i < programas.length; i++){
        var itemLista = document.createElement('li');
        list = programas[i].getnombre();
        itemLista.append(list);
    }
    let listado = document.querySelector("#listado");
    listado.append(itemLista);
*/


}