import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CardbodyComponent } from './cardbody/cardbody.component';
import { NewcardComponent } from './newcard/newcard.component';
import { ProductsComponent } from './products/products.component';
// import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    DashbordComponent,
    CardbodyComponent,
    NewcardComponent,
    ProductsComponent,
    // ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
