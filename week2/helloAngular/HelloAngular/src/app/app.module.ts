import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CookieListComponent } from './cookie/cookie-list/cookie-list.component';
import { CookieComponent } from './cookie/cookie/cookie.component';

import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http'
import {HttpService} from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CookieListComponent,
    CookieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
