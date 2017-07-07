
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FfxivHomeComponent } from "./ffxiv-home/ffxiv-home.component";

import { FfxivTestComponent } from "./ffxiv-test/ffxiv-test.component";

import { FfxivGuidesComponent } from "./ffxiv-layouts/ffxiv-guides.component";

import { FFXIV_GUIDES_ROUTES } from "./ffxiv-guides/ffxiv-guides.routes";


export const FFXIV_ROUTES: Routes = [
  { path: "", component: FfxivHomeComponent },
  { path: "test", component: FfxivTestComponent },
  { path: "guides", component: FfxivGuidesComponent, children: FFXIV_GUIDES_ROUTES },


]