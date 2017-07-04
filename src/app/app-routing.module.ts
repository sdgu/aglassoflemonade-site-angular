import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./main/home/home.component";
// import { AboutComponent } from "./about/about.component";
// import { GpComponent } from "./gp/gp.component";
// import { MusingsComponent } from "./musings/musings.component";

import { MainComponent } from "./layouts/main.component";
import { FfxivComponent } from "./layouts/ffxiv.component";

import { MAIN_ROUTES } from "./main/main.routes";
import { FFXIV_ROUTES } from "./ffxiv/ffxiv.routes";

import { NotFoundComponent } from "./not-found/not-found.component";

import { LoginComponent } from "./login/login.component";
import { TestComponent } from "./test/test.component";

import { AuthGuardService } from "./auth-guard.service";
const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', redirectTo: "/", pathMatch: "full" }, // component: HomeComponent },
  // { path: "about", component: AboutComponent },
  // { path: "gp", component: GpComponent },
  // { path: "musings", component: MusingsComponent}
  { path: "404", component: NotFoundComponent },
  { path: "login", component: LoginComponent },
  { path: "test", component: TestComponent, canActivate: [AuthGuardService]},

  { path: "", component: MainComponent, children: MAIN_ROUTES },
  { path: "ffxiv", component: FfxivComponent, children: FFXIV_ROUTES },
  
  { path: "**", redirectTo: "/404" },
];
@NgModule(
{
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule 
{
	
}