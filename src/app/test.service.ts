import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';

import { AuthHttp } from "angular2-jwt";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TestService {
  // Define the routes we are going to interact with
  private testUrl = "api/test";
  constructor(private http: Http, private authHttp: AuthHttp) { }

  // Implement a method to get the public deals
  getTest() {
    return this.authHttp
      .get(this.testUrl)
      .toPromise()
      .then(response=>response.json() as string[])
      .catch(this.handleError);
  }


  // Implement a method to handle errors if any
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}