//Clase (molde del objeto)
export class Camiseta {

    //Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Metodos (funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){//se usa para definir los valores de las propiedades al instanciar un objeto
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    public setColor(color) {
        this.color = color;
    }
    public getColor() {
        return this.color;
    }

}

// var camiseta = new Camiseta("rojo", "Manga Larga","nike", "L", 14);//instanciar de la clase para crear un objeto
// camiseta.setColor("Rojo");
// //camiseta.getColor();



// console.log(camiseta.getColor());

