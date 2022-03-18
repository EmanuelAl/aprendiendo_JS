import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',//indicamos la vista que vamos a utilizar en este, reutilizamos la vista de create
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]//cargamos los servicios
})
export class EditComponent implements OnInit {
  public title: string;
  public project: any;
  public status: string;
  // public filesToUpload: any;
  public filesToUpload: Array<File>;
  public save_project: any;
  public url: String;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    // public filesToUpload: Array<File>
    private _route: ActivatedRoute,
    private _Router: Router
  ) {
    this.title = "Editar proyecto";
    this.status = '';
    this.filesToUpload =new Array();
    this.url = Global.url;
    /*
     public _id: string,
        public name: string,
        public description: string,
        public category: string,
        public year: string,
        public langs: string,
        public image: string
    */

   }
   ngOnInit(): void {
    this._route.params.subscribe(params => {
        let id = params['id'];

        this.getProject(id);
    });
  }

  getProject(id: any){
      this._projectService.getProject(id).subscribe(
        response => {
            this.project = response.project;
        },
        error => {
            console.log(<any>error);
        }
      );
  }
  onSubmit(form: any){//guarda proyectos
    // console.log(this.project);
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if(response.project){
          
          //subir la imagen 
          if(this.filesToUpload){//pregunta si existe archivo antes de subir
            this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id, [], this.filesToUpload, 'image').then((result: any)=>{
              // console.log(result);
              this.save_project = result.project;
              this.status = 'success';
              // form.reset();
            });
          }else {
            this.save_project = response.project;
            this.status = 'success';
          }
          
          
        }else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any){//metodo que captura lo que haya en el input de imagen cuando se produzca el cambio/event
    // console.log(fileInput);
    //filesToUpload archivos para subir
    this.filesToUpload = <Array<File>>fileInput.target.files;//casteamos los archivos a subir
  }
}
