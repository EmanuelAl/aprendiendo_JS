/* la interfaz se aplica a la clase usando
'implements NombreInterface' */
//Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    //Metodos (funciones o acciones del objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("rojo", "Manga Larga", "nike", "L", 14); //instanciar de la clase para crear un objeto
// camiseta.setColor("Rojo");
// //camiseta.getColor();
console.log(camiseta);
