import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Role } from '../models/Role'

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  roleUrl:string = "http://localhost:8080/v1/roles";

  constructor(private http:HttpClient) { }

  getRoles():Observable<Role[]> {
    return this.http.get<Role[]>(this.roleUrl);
  }

}

