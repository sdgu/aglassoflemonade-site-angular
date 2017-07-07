import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestGuideComponent } from "./test-guide/test-guide.component";


export const FFXIV_GUIDES_ROUTES: Routes = [

{ path: "test", component: TestGuideComponent },

]