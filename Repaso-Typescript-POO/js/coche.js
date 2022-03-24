var Coche = /** @class */ (function () {
    /* para generar metodos getters an setters
    rapidamente hacemos:
    - seleccionar propiedad y click derecho
    -ir a 'refactor..'
    -generate 'get' an 'set' accessors
    */
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = 'Blanco';
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = 'BMW Generico';
        }
        else {
            this.modelo = modelo;
        }
    }
    /* parametros opcionales en funciones ejemplo:
        function nombreFuncion(a = 2, b= 3){
            ---codigo---
        }
    
    */
    /* get y set manualmente : */
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    /* metodos */
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var coche1 = new Coche('renault Clio');
var coche2 = new Coche();
var coche3 = new Coche();
// coche1.setColor('ROJO');
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
// coche2.setColor('AZUL');
// coche3.setColor('VERDE');
console.log("El modelo del coche 1 es: " + coche1.getModelo());
console.log("El color del coche 1 es: " + coche1.getColor());
console.log("La velocidad del coche 1 es: " + coche1.getVelocidad());
coche1.frenar();
console.log("La velocidad despues de frenar el coche 1 es: " + coche1.getVelocidad());
// console.log("El color del coche 2 es: "+coche2.getColor());
// console.log("El color del coche 3 es: "+coche3.getColor());
