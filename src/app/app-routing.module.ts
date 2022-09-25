import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditProductListComponent } from './components/admin/edit-product/edit-product-list/edit-product-list.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { CardComponent } from './components/card/card.component';
import { ProductDetailComponent } from './components/shop/product-detail/product-detail.component';
import { ProductsListComponent } from './components/shop/products-list/products-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/all_products', pathMatch: 'full'},
  {path: 'all_products', component: ProductsListComponent },
  {path: 'product/:id', component: ProductDetailComponent },
  {path: 'cart', component: CardComponent },
  {path: 'admin', component: AdminComponent, children: [
    {path: 'add_product', component: AddProductComponent},
    {path: 'edit_product', component: EditProductListComponent},
    {path: 'edit_product/:id', component: EditProductComponent } 
  ] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
