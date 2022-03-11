import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Project } from 'src/app/models/project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  // public projects: Array<any>;
  public projects: Project[];
  public url: String;

  constructor(
    private _projectService : ProjectService,
    
  ) { 
    this.projects = new Array();
    this.url = Global.url;
  }

  ngOnInit(): void {
  this.getProjects();

  }

  getProjects(){//para obtener la lista de los projects
    this._projectService.getProjects().subscribe(
      response =>{
        // console.log(response);
        if(response.projects){
          this.projects = response.projects;
        }
      },
      error => {
        console.log(<any>error)
      }
    );
  }


}
