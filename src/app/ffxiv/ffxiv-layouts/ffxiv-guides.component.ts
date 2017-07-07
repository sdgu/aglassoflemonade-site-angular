import { Component } from '@angular/core';

@Component(
{
  selector: 'app-ffxiv-guides',
  template: "<h2>FFXIV Guides</h2> <router-outlet></router-outlet>",
  // templateUrl: './ffxiv.component.html',
  // styleUrls: ['./ffxiv.component.css']
})
export class FfxivGuidesComponent 
{
  

  title = "FFXIV section";
}
