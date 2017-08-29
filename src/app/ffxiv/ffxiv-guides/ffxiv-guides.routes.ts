import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestGuideComponent } from "./test-guide/test-guide.component";
import { GeneralCraftingComponent } from "./general-crafting/general-crafting.component";

export const FFXIV_GUIDES_ROUTES: Routes = [

{ path: "test", component: TestGuideComponent },
{
	path: "general-crafting", component: GeneralCraftingComponent
}

]