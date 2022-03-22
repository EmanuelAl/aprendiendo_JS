import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;//para que no salte error de tipo ya que angular no lo reconoce

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: any;//para obtener del componente padre el ancho 
  @Input('etiquetas') captions: any; //lo mismo que la linea anterior , solo que de esta forma renombramos la variable etiquetas y le ponemos de nombre captions
  @Output() conseguirAutor = new EventEmitter();// con este objeto que estamos instanciando podemos crear nuevos eventos

  public autor: any;

  constructor() {
    this.autor = {
      nombre: "Victor Robles",
      website: "victorroblesweb.es",
      youtube: "Victor Robles WEB"
    };
   }

  ngOnInit(): void {
    $("#logo").click(function(e: any){
      e.preventDefault();
        $("header").css("background","green")
                   .css("height","50px");
    });

   
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura + 'px',
    });
  }

  lanzar(event: any){
    console.log(event);
    this.conseguirAutor.emit(this.autor);//esto es lo que se va a emitir, 
    //pasamos el objeto autor al component contact, es lo que va a recibir contact en su vista
  }

}
