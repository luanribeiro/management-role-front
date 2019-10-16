import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component'
import { RolesComponent } from './components/roles/roles.component'
import { ProjectsComponent } from './components/projects/projects.component'
import { UsersComponent } from './components/users/users.component'


const routes: Routes = [];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes)
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'projects', component: ProjectsComponent },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
