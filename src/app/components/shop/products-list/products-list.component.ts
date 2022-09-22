import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products!: Product[]

  constructor(private productservice: ProductsService) { }

  ngOnInit(): void {
    this.productservice.getProducts().subscribe((products)=> {
      this.products = products
      
    })
    
  }

}
