import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Project } from '../models/Project'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectUrl:string = "http://localhost:8080/v1/projects";

  constructor(private http:HttpClient) { }

  getProjects():Observable<Project[]> {
    return this.http.get<Project[]>(this.projectUrl);
  }

}
