import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Nike Airmax','Nike','Rojas', 190, true),
            new Zapatilla('Reebook Classic','Reebook','Blanco', 80, true),
            new Zapatilla('Nike Runner MD','Nike','Negras', 60, true),
            new Zapatilla('Adidas Yezzy','Adidas','Gris', 180, false)
        ];

    }

    ngOnInit(): void {
        console.log(this.zapatillas);
    }
}