import { Component } from "@angular/core";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent {
    public titulo: string;

    constructor(){
        this.titulo = "Componente de zapatillas";
    }
}