import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { GpComponent } from "./gp/gp.component";
import { MusingsComponent } from "./musings/musings.component";
import { LoginComponent } from "./login/login.component";
import { TestComponent } from "./test/test.component";

import { AuthGuardService } from "./auth-guard.service";

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '',  component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "gp", component: GpComponent },
  { path: "musings", component: MusingsComponent },
  
  {
  	path: "login",
  	component: LoginComponent
  },
  {
  	path: "test",
  	component: TestComponent,
  	canActivate: [AuthGuardService]
  },
  { 
  	path: "**",
  	redirectTo: "",
  	pathMatch: "full"
  }

];
@NgModule(
{
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule 
{
	
}