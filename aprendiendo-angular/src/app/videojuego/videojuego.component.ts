import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
/*ademas de importar la clase componente
importamos los hooks/eventos de ciclo de vida
del component : OnInit,  DoCheck */
@Component({
   selector: 'videojuego' ,
   templateUrl: './videojuego.component.html'
})
//los hooks se implemetan a la clase como lo hariamos
// con una interface
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de los juegos mas populares";
        console.log("Se ha cargado el componente: videojuego.component.ts");
    }
//Hooks/ eventos de cliclo de vida del componente
/* son eventos que se ejecutan en un momendo dado
del cilo de vida del componente...
son eventos que se van a lanzar dependiendo
del estado en el que se encuentre el componente, 
por ejemplo cuando iniciemos el componente
o hagamos un cambio en el componente, etc*/

//ngOnInit() es un hook que se ejecuta
//al iniciar el componente
    ngOnInit(){
        console.log("OnInit ejecutado");
    }
/*ngDoCheck es un hook que se ejecuta
cuando se produce algun cambio en el 
componente o en la aplicacion de 
angular */
    ngDoCheck(){
        console.log("DoCheck ejecutado");
    }
/*ngOnDestroy es un hook que nos sirve 
para que se ejecute algo antes de eliminar
la instancia de un componente o cuando 
se destruya el componente osea cuando se
deje de mostrar en la vista*/
    ngOnDestroy(): void {
        console.log("OnDestroy ejecutado");
    }
/* metodo para demostrar como funciona
el DoCheck*/
    cambiarTitulo(){
        this.titulo = "Nuevo titulo del componente";
    }

}