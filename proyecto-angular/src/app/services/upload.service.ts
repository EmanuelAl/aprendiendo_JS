import { Injectable } from "@angular/core";
import { Global } from "./global";

@Injectable()
export class UploadService{
    public url: string;
    constructor(){
        this.url = Global.url;
    }

    makeFileRequest(url: string, params: Array<String>, files: Array<File>, name: string){
        return new Promise(function(resolve, reject){
            // definimos la piticion ajax
            //para esto simulamos un formulario clasico de la sig manera
            let formData:any = new FormData();//este obejto nos va a permitir crear una especie de formulario en un objeto
            var xhr = new XMLHttpRequest();//tipico objeto de peticiones ajax asincronas, xhr es un sinónimo de ajax

            for(var i = 0; i < files.length; i++){//recorre el array de archivos files
                formData.append(name, files[i], files[i].name );//agregamos los datos al formulario
            }
            //hacemo la peticion ajax
            xhr.onreadystatechange = function(){ //cuando haya algun cambio
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response));
                    }else{
                        reject(xhr.response);
                    }
                }
            }

            xhr.open('POST', url, true);
            xhr.send(formData);

        });
        // explicacion de este metodo en video nro 249

    }
}
