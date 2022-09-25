import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShopComponent } from './components/shop/shop.component';
import { ProductsListComponent } from './components/shop/products-list/products-list.component';
import { ProductDetailComponent } from './components/shop/product-detail/product-detail.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { HeaderComponent } from './components/header/header.component';
import { EditProductListComponent } from './components/admin/edit-product/edit-product-list/edit-product-list.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ProductsListComponent,
    ProductDetailComponent,
    AdminComponent,
    AddProductComponent,
    HeaderComponent,
    EditProductComponent,
    EditProductListComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
