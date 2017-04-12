import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { GpComponent } from "./gp/gp.component";
import { MusingsComponent } from "./musings/musings.component"

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '',  component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "gp", component: GpComponent },
  { path: "musings", component: MusingsComponent}

];
@NgModule(
{
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule 
{
	
}