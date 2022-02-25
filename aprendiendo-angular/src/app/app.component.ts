import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Welcome to';
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;
  public config: any;

  constructor(){
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion;
  }


  ocultarVideojuego(value: any){
    this.mostrar_videojuegos = value;
  }
}
