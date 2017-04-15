import { Injectable } from '@angular/core';
import { tokenNotExpired } from "angular2-jwt";
import { Router } from "@angular/router";

import { environment } from "../environments/environment";

declare var Auth0Lock: any;

@Injectable()
export class AuthService 
{
  lock = new Auth0Lock(environment.AUTH0_CLIENT_ID, environment.AUTH0_DOMAIN);
  
  constructor(private router: Router) 
  {
  	this.lock.on("authenticated", (authResult: any) =>
  	{
  		localStorage.setItem("id_token", authResult.idToken);

  		this.lock.getProfile(authResult.idToken, (error: any, profile: any) =>
  		{
  			if (error)
  			{
  				console.log(error);
  			}

  			localStorage.setItem("profile", JSON.stringify(profile))
  		})
  		this.lock.hide();
  	}) 
  }


  login()
  {
  	this.lock.show();
  }

  logout()
  {
  	localStorage.removeItem("profile");
  	localStorage.removeItem("id_token");

  	this.router.navigateByUrl("");
  }

  loggedIn()
  {
  	return tokenNotExpired();
  }

}
