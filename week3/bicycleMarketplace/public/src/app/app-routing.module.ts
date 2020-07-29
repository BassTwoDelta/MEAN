import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAndCreateBikesComponent } from './edit-and-create-bikes/edit-and-create-bikes.component';


const routes: Routes = [
  {path: "listings", component: EditAndCreateBikesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
