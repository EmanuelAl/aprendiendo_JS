import { Component, OnInit, Input } from '@angular/core';
declare var $:any;//para que no salte error de tipo ya que angular no lo reconoce

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: any;//para obtener del componente padre el ancho 
  @Input('etiquetas') captions: any; //lo mismo que la linea anterior , solo que de esta forma renombramos la variable etiquetas y le ponemos de nombre captions
  constructor() { }

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

}
