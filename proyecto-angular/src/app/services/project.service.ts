import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";//para poder hacer peticiones ajax
import { Observable } from "rxjs";
import { Project } from "../models/project";
import { Global } from "./global";

@Injectable()
export class ProjectService {
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url; 
    }

    testService(){
        return  'Probando el servicio de Angular';
    }

    saveProject(project: Project): Observable<any>{//metodo para guardar proyectos
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-type','application/json');//definimos como va a viajar nuestra informacion

        return this._http.post(this.url+'save-project', params, {headers: headers});//alta de peticion
    }
}