import { Pipe, PipeTransform } from "@angular/core";//para crear pipes

@Pipe({
    name: 'calculadora' //para implemetarlo en la vista
})
export class calculadoraPipe implements PipeTransform{// la interface PipeTransform nos permitira implementar la pipe
    /* en la vista lo usariamos :
        dato | calculadora segundoDato
        param1             param2
    */

    transform(value: any, value_two: any) {
        let operaciones = `
        suma: ${value + value_two}--
        Resta:${value - value_two}--
        Multiplicacion:${value * value_two}--
        Division:${value / value_two}
        `;
        return operaciones;
    }
}
//una vez creada nuestra pipe la importamos
// en el appmodule