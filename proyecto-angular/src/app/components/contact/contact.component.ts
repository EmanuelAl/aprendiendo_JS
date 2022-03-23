import { Component, ElementRef, OnInit , ViewChild} from '@angular/core';
    
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: any;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;
  /*                   {static: true/false} , es true si la vista(html) no depende de ningun condicional
                                              es false si depende la vista(html) de alguna condicional*/
  @ViewChild('textos',{static: true}) textos: ElementRef | any//para utilizar la seleccion de la vista

  constructor() { 
    // this.widthSlider = 0;
    this.captions = true;

  }

  ngOnInit(): void {
    let opcion_clasica = document.querySelector('#texto')?.innerHTML;//manera clasica de seleccionar un elemento del DOM con javascript 
    //en angular para seleccionar algun elemento del DOM podemos usar los viewchilds:
    /*
    -- en la vista creamos la variable a seleccionar con #nombrevariable
    -- en el componente se importa la clase ViewChild
    -- se crea en el componente una propiedad nueva con el decorador @ViewChild('nombrevariable')
     */
    console.log(this.textos);
    alert(this.textos.nativeElement.textContent);

  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = false;
  }

  getAutor(event: any){//para capturar el evento y obtener el objeto autor del componente hijo slider
    // console.log(event);
    this.autor = event;
  }
}
