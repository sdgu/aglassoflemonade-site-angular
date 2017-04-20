import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from "@angular/router";
import { ColorPickerModule } from "ngx-color-picker";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GpComponent } from './gp/gp.component';
import { MusingsComponent } from './musings/musings.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';

import { SafeHtmlPipe } from "./safe-html.pipe";

import { FocusDirective } from "./focus.directive";


import { AuthHttp, AuthConfig } from "angular2-jwt";


import { AuthService } from "./auth.service";
import { AuthGuardService } from "./auth-guard.service";

import { TestService } from "./test.service";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'id_token',
          tokenGetter: (() => localStorage.getItem('id_token')),
          globalHeaders: [{'Content-Type':'application/json'}],
     }), http, options);
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GpComponent,
    SafeHtmlPipe,
    FocusDirective,
    MusingsComponent,
    LoginComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    ColorPickerModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthService,
    AuthGuardService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
