class Coche{
    /* visibilidad de las propiedades y metodos
    las propiedades o metodos pueden ser public-private-protected
    public: se accede desde dentro y fuera de la clase(una vez creado/instanciado antes el objeto),
             es decir, se accede desde dentro de la clase,por fuera, desde la clase que hereda o desde otra clases, desde cualquie lugar
    private: solo se accede desde dentro de la clase donde se declara, no por fuera de la clase ni desde otro lugar
             solo se accede a la propiedad/metodo, desde dentro de la clase unicamente.
    protected: solo se puede acceder a las propiedades/atributos 
                o metodos desde la clase donde se definen, o la clase que herede de la clase donde se definen,
                no por fuera de la clase
    */
    public color: string;
    public modelo: string;
    public velocidad: number;
    /* para generar metodos getters an setters 
    rapidamente hacemos:
    - seleccionar propiedad y click derecho
    -ir a 'refactor..'
    -generate 'get' an 'set' accessors
    */

    constructor(modelo: any = null){//para inicializar las propiedades de la clase
        this.color = 'Blanco';
        this.velocidad = 0;

        if(modelo == null){
          this.modelo = 'BMW Generico';
        }else{
            this.modelo = modelo;
        }


    }
    /* parametros opcionales en funciones ejemplo:
        function nombreFuncion(a = 2, b= 3){
            ---codigo---
        }
    
    */

   /* get y set manualmente : */
   public getModelo() {
    return this.modelo;
    }
    public setModelo(modelo: string) {
        this.modelo = modelo;
    }

   public getColor() {
       return this.color;
   }
   public setColor(color: string) {
       this.color = color;
   }
/* metodos */
   public acelerar() {
       this.velocidad++;
   }
 
   public frenar() {
       this.velocidad--;
   }

   public getVelocidad(): number{
       return this.velocidad;
   }
}

let coche1 = new Coche('renault Clio');
let coche2 = new Coche();
let coche3 = new Coche();

// coche1.setColor('ROJO');
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();


// coche2.setColor('AZUL');
// coche3.setColor('VERDE');

console.log("El modelo del coche 1 es: "+coche1.getModelo());
console.log("El color del coche 1 es: "+coche1.getColor());
console.log("La velocidad del coche 1 es: "+coche1.getVelocidad());


coche1.frenar();
console.log("La velocidad despues de frenar el coche 1 es: "+coche1.getVelocidad());
// console.log("El color del coche 2 es: "+coche2.getColor());
// console.log("El color del coche 3 es: "+coche3.getColor());