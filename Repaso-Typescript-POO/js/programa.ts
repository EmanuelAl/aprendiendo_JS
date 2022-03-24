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