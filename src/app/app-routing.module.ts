import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import {SearchComponent } from './search/search.component'
import { CreateUserComponent } from './create-user/create-user.component'


const routes: Routes = [
  {path:'', component: FrontPageComponent},
  {path:'search', component: SearchComponent},
  {path:'create-user', component: CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
