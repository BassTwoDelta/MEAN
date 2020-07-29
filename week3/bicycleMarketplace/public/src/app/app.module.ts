import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBikesComponent } from './all-bikes/all-bikes.component';
import { EditAndCreateBikesComponent } from './edit-and-create-bikes/edit-and-create-bikes.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBikesComponent,
    EditAndCreateBikesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
