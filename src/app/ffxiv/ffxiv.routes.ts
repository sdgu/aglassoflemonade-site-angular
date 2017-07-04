
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FfxivHomeComponent } from "./ffxiv-home/ffxiv-home.component";

import { FfxivTestComponent } from "./ffxiv-test/ffxiv-test.component";

export const FFXIV_ROUTES: Routes = [
  { path: "", component: FfxivHomeComponent },
  { path: "test", component: FfxivTestComponent },


]