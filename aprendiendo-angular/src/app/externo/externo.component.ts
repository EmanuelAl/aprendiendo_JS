import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;

  constructor(
    private _peticionesService: PeticionesService //injecto este servicio en la propiedad para utlizar sus metodos
  ) {
    this.userId = 1;
   }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.user=false; // esto es para que nos aparezca el "cargando..." en cada peticion
    this._peticionesService.getUser(this.userId).subscribe(//el metodo subscribe lo tiene el observable,para recoger el resultado de la peticion 
      result => {
        // console.log(result.data);
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
