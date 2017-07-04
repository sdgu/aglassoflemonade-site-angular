import { Component, OnInit } from '@angular/core';


@Component(
{
  selector: 'app-ffxiv-home',
  templateUrl: './ffxiv-home.component.html',
  // styleUrls: ['./home.component.css']
})
export class FfxivHomeComponent implements OnInit {


  title = "FFXIV section";

  constructor() { }

  ngOnInit() {
  }

}
