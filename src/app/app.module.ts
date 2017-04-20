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

import { SafeHtmlPipe } from "./safe-html.pipe";

import { FocusDirective } from "./focus.directive";
import { MusingsComponent } from './musings/musings.component';

import { AuthHttp, AuthConfig } from "angular2-jwt";

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
    MusingsComponent
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
