import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]//cargamos los servicios
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;

  constructor(
    private _projectService: ProjectService
  ) {
    this.title = "Crear proyecto";
    this.project = new Project('','','','',2019,'','');
    this.status = '';
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
          this.status = 'success';
          form.reset();
        }else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
