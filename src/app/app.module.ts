import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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

import { AuthService } from "./auth.service";
import { TestService } from "./test.service";
import { AuthGuardService } from "./auth-guard.service";


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
  providers: [AuthService, TestService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
