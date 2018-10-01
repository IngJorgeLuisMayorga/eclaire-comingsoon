import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';


import { NotfoundComponent } from './../views/notfound/notfound.component';
import { HomeComponent } from './../views/home/home.component';
import { ComingsoonComponent } from './../views/comingsoon/comingsoon.component';



const routes: Routes = [
  {
    path: '',
    component: ComingsoonComponent
  },
  {
    path: 'comingsoon',
    component: ComingsoonComponent
  },
  {
    path: 'not-found',
    component: NotfoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
