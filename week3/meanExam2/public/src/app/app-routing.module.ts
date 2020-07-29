import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDeetsComponent } from './product-deets/product-deets.component';


const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: "full"},
  {path: 'products', component: ProductListComponent},
  {path: 'products/new', component: NewProductComponent},
  {path: 'products/:id', component: ProductDeetsComponent},
  {path: 'products/:id/edit', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
