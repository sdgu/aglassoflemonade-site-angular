import { Component, OnInit } from '@angular/core';

import { AuthService } from "../auth.service";
import { TestService } from "../test.service";

import { environment } from "../../environments/environment";

@Component({
  selector: 'app-musings',
  templateUrl: './musings.component.html',
  styleUrls: ['./musings.component.css']
})
export class MusingsComponent implements OnInit {

	tests: string[];

  constructor(private testService: TestService) { }

  ngOnInit() {

  	this.testService.getTest()
  	.then((tests) => 
  	{
  		this.tests = tests;
  	});

  }

}
