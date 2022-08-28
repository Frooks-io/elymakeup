import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductsComponent} from './components/products/products.component';

const routes = [
    {path: '', redirectTo: 'novedades', pathMatch: 'full'},
    {path: 'novedades', component: HomeComponent},
    {path: 'productos', component: ProductsComponent}];

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        AppRoutingModule,
    ],
    declarations: [AppComponent, FooterComponent, HomeComponent, NavbarComponent, ProductsComponent],
    bootstrap: [AppComponent, FooterComponent, HomeComponent, NavbarComponent, ProductsComponent],
})
export class AppModule {
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
