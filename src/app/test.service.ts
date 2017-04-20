import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { AuthHttp } from "angular2-jwt";

import "rxjs/add/operator/map";

@Injectable()
export class TestService {


	private testUrl = "api/test";


  constructor(private http: Http, private authHttp: AuthHttp) { }

  getTest()
  {
  	return this.authHttp
  			   .get(this.testUrl)
  			   .map(res => res.json());
  }

}
