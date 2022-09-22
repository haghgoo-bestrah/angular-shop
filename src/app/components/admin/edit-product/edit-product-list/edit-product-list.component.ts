import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product-list',
  templateUrl: './edit-product-list.component.html',
  styleUrls: ['./edit-product-list.component.scss']
})
export class EditProductListComponent implements OnInit {

  products!: Product[]

  constructor(private productservice: ProductsService) { }

  ngOnInit(): void {
    this.productservice.getProducts().subscribe((products)=> {
      this.products = products
      
    })

}
}
