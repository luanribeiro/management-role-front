import { Component, OnInit, Output } from '@angular/core';

import { UserService } from '../../services/user.service'

import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output() users:User[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
