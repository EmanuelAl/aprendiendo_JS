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
}
