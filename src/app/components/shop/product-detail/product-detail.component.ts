import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from 'src/app/interfaces/product';
import { CardService } from 'src/app/services/card.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
   product!: Product;
   id!: number;

  constructor(
    private productservice: ProductsService, 
    private route: ActivatedRoute, 
    private cardService: CardService ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.productservice.getProduct(this.id).subscribe(product => {
        this.product = product
        console.log(product);
        
      })
      
    });
    
  }

  onAddtoCard(){
    this.cardService.addToCard(this.product)
    this.cardService.cardCount.next(this.cardService.card.length)
  }

}
