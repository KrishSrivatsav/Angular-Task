import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
// import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
  path: '',
  component: DashbordComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
