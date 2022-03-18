import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Project } from 'src/app/models/project';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjectService]
})
export class DetailComponent implements OnInit {
  public url: String;
  public project: any;
  public confirm: boolean;

  constructor(
    private _projectService: ProjectService,
    private _Router: Router,
    private _route: ActivatedRoute
    
  ) { 
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
        let id = params['id'];//recoge de la url el id

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
  setConfirm(confirm: boolean){
      this.confirm = confirm;
  }

  deleteProject(id: any){
    this._projectService.deleteProject(id).subscribe(
      response => {
        if(response.project){
          this._Router.navigate(['/proyectos']);//para que me redirija  a la lista de proyectos en la vista al borrar
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
