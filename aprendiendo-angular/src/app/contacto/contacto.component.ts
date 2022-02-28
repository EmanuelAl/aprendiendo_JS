import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario: ContactoUsuario;
  constructor() { 
    this.usuario = new ContactoUsuario('','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    
    console.log("evento lanzado");
    console.log(this.usuario);
    // form.reset(); //para resetear el formulario para que quede en blanco
    /* y pone todos los campos input en null
    por lo cual eso hace que mi objeto quede
    vacio, en este caso no nos sirve aplicarlo*/
  }
}
