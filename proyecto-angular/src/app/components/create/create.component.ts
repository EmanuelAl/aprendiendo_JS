import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]//cargamos los servicios
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  // public filesToUpload: any;
  public filesToUpload: Array<File>;
  public save_project: any;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    // public filesToUpload: Array<File>
    
  ) {
    this.title = "Crear proyecto";
    this.project = new Project('','','','',2019,'','');
    this.status = '';
    this.filesToUpload =new Array();
    /*
     public id: string,
        public name: string,
        public description: string,
        public category: string,
        public year: string,
        public langs: string,
        public image: string
    */

   }

  ngOnInit(): void {
  }

  onSubmit(form: any){//guarda proyectos
    // console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          
          //subir la imagen 
          this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id, [], this.filesToUpload, 'image').then((result: any)=>{
            // console.log(result);
            this.save_project = result.project;
            this.status = 'success';
            form.reset();
          });
          
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
