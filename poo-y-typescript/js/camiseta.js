//Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    //Metodos (funciones o acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta(); //instanciar de la clase para crear un objeto
camiseta.setColor("Rojo");
//camiseta.getColor();
var playera = new Camiseta();
playera.setColor("Azul");
//playera.getColor("Azul");
console.log(camiseta.getColor(), playera.getColor());
