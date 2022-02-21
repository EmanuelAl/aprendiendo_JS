//Interface
//se usa para obligar a una clase a utilizar metodos o propiedades de forma obligatoria
interface CamisetaBase{
    setColor(color);//declarado igual que el metodo que esta en clase camiseta
    getColor();//declarado igual que el metodo que esta en clase camiseta
}
/* la interfaz se aplica a la clase usando
'implements NombreInterface' */


//Clase (molde del objeto)
class Camiseta implements CamisetaBase{

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
//Clase hija la que hereda todo de la clase camiseta
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }
    getCapucha(){
        return this.capucha;
    }
}




var camiseta = new Camiseta("rojo", "Manga Larga","nike", "L", 14);//instanciar de la clase para crear un objeto
// camiseta.setColor("Rojo");
// //camiseta.getColor();

var sudadera_nike = new Sudadera("Rojo","Manga larga","Nike","L",30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris");


console.log(sudadera_nike);

