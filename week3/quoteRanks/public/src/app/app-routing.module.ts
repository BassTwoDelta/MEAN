import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';


const routes: Routes = [
  {path: "", component: AllAuthorsComponent},
  {path: "new", component: AddAuthorComponent},
  {path: "edit/:id", component: EditAuthorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
