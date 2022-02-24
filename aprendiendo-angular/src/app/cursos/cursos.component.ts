import { Component, OnInit } from '@angular/core';
/*ademas de importar la clase componente
importamos los hooks/eventos de ciclo de vida
del component : OnInit,   */
@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor() { }
//Hooks/ eventos de cliclo de vida del componente
/* son eventos que se ejecutan en un momendo dado
del cilo de vida del componente...
son eventos que se van a lanzar dependiendo
del estado en el que se encuentre el componente, 
por ejemplo cuando iniciemos el componente
o hagamos un cambio en el componente, etc*/

//ngOnInit() es un hook que se ejecuta
//al iniciar el componente
  ngOnInit(): void {
  }

}
