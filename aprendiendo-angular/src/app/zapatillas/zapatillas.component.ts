import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];

    constructor(){
        this.marcas= new Array();

        this.zapatillas = [
            new Zapatilla('Nike Airmax','Nike','Rojas', 40, true),
            new Zapatilla('Reebook Classic','Reebook','Blanco', 80, true),
            new Zapatilla('Reebook Spartan','Reebook','Negra', 180, true),
            new Zapatilla('Nike Runner MD','Nike','Negras', 60, true),
            new Zapatilla('Adidas Yezzy','Adidas','Gris', 180, false)
        ];
    }

    ngOnInit(): void {
        console.log(this.zapatillas);

        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla,index)=>{

            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
            
        });
        console.log(this.marcas);
    }
}