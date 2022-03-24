/* Clase Padre */
class Programa {
    public nombre: string;
    public version: number;

    getnombre(){
        return this.nombre;
    }
    setNombre(nombre: string){
        this.nombre = nombre;
    }
    getVersion(){
        return this.version;
    }
    setVersion(version: number){
        this.version = version;
    }
}
/* Clase Hija */
//con extends NombreClasePAdre indicamos que la clase va a heredar de la clase padre indicada
class EdithVideo extends Programa{
    public timeline: number;

    getTimeline(){
        return this.timeline;
    }

    setTimeline(timeline: number){
        this.timeline = timeline;
    }

    getAllData(): string{
        return this.getnombre()+" - "+this.getVersion()+" - "+this.getTimeline();
    }
}

var editor = new EdithVideo();
editor.setNombre('Cantasia Studio');
editor.setVersion(1);
editor.setTimeline(4000);

console.log(editor.getAllData());
