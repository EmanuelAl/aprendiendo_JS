/*lo normal al crear un modelo(osea un molde)
de una Entidad/clase de la cual queremos
instanciar objetos , es que al archivo
le pongamos nombre en singular del molde
que representara */
export class Zapatilla {
    /*
    public nombre: string;
    public marca: string;
    public color: string;
    public precio: number;
    public stock: boolean;

    constructor(nombre,marca,color,precio,stock){
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }
     */
    /*
    de la sig manera evitamos tener que 
    crear el constructor de la forma 
    anterior
    escribimos menos asi:
    */
    constructor(
        public nombre: string,
        public marca: string,
        public color: string,
        public precio: number,
        public stock: boolean
    ){}/* esto automaticamente
    // setea el valor a las propiedades */

}