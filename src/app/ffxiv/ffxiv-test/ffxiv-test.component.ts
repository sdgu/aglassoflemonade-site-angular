import { Component, OnInit } from '@angular/core';


@Component(
{
  selector: 'app-ffxiv-test',
  template: "<h2>test page</h2>",
  // templateUrl: '<h1>test page</h1>',
  // styleUrls: ['./home.component.css']
})
export class FfxivTestComponent implements OnInit {


  title = "FFXIV section";

  constructor() { }

  ngOnInit() {
  }

}
