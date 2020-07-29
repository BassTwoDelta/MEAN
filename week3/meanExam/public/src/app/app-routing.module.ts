import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/restaurants', pathMatch: "full"},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/new', component: AddRestaurantComponent},
  {path: 'restaurants/:id', component: ReviewsComponent},
  {path: 'restaurants/:id/review', component: NewReviewComponent},
  {path: 'restaurants/:id/edit', component: EditComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
