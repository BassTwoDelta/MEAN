import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DallasComponent } from './dallas/dallas.component'
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';


const routes: Routes = [
  {path: "", component: DallasComponent},
  {path: "seattle", component: SeattleComponent},
  {path: "sanjose", component: SanjoseComponent},
  {path: "burbank", component: BurbankComponent},
  {path: "dc", component: DcComponent},
  {path: "chicago", component: ChicagoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
