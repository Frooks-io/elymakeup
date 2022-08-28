import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from "@angular/router";
import {ProductsComponent} from "./components/products/products.component";


const routes: Routes = [{
  path: 'productos',
  component: ProductsComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
