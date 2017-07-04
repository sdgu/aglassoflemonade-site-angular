import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { TestService } from "../test.service";

class Test
{
	word: string
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

	tests: Test[];
	prof: string;


  constructor(private testService: TestService, public authService: AuthService) { }

  ngOnInit() 
  {
  	this.prof = localStorage.getItem("profile");
  	this.testService.getTest()
  					.subscribe(tests =>
  					{
  						this.tests = tests;
  					})
  }

}
