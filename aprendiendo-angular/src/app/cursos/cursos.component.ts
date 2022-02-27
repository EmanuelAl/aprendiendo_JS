import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public followers: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) {
      this.nombre= '';
     }

  ngOnInit(): void {
    //para capturar parametros por la url
    //por la ruta de cursos
    this._route.params.subscribe((params: Params)=>{
        
        this.nombre = params['nombre'];
        this.followers = +params['followers'];
        // console.log(this.nombre) ;
        //console.log(typeof +params['followers']) ;

        if(this.nombre == 'ninguno'){
          this._router.navigate(['/home']);
        }
    });
  }
  redirigir(){
    this._router.navigate(['/videojuego']);
  }
}
