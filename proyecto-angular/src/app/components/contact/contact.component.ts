import { Component, OnInit } from '@angular/core';
    
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

  constructor() { 
    // this.widthSlider = 0;
    this.captions = true;
  }

  ngOnInit(): void {
 
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
