import { Component, OnInit } from '@angular/core';
    
declare var $:any;//para que no salte error de tipo ya que angular no lo reconoce

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    $("#logo").click(function(e: any){
      e.preventDefault();
        $("header").css("background","green")
                   .css("height","50px");
    });

   
      $('.galeria').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 600
      });
    
    


  }

}
