import { Injectable } from "@angular/core";//para injectar nuestros servicios en otra clases
import { HttpClient, HttpHeaders } from "@angular/common/http";//para poder hacer peticiones ajax
import { Observable } from "rxjs";//con esto recogemos la informacion que nos llega de la peticion ajax

@Injectable()
export class PeticionesService{
    public url: string;
    constructor(
        public _http: HttpClient
    ){
        this.url = "https://reqres.in";//rest api
    }

    getUser(userId: any): Observable<any>{
        return this._http.get(this.url+'/api/users/'+userId);//peticion ajax a la api de un solo usuario
    }
}