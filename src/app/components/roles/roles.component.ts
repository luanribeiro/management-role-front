import { Component, OnInit, Output } from '@angular/core';

import { RoleService } from '../../services/role.service'

import { Role } from '../../models/Role'

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  
  @Output() roles:Role[];

  constructor(private roleService:RoleService) { }

  ngOnInit() {
    this.roleService.getRoles().subscribe(roles => this.roles = roles);
  }

}
