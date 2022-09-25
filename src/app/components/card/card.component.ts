import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cartItems !: Product[]

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cartItems = this.cardService.getCardItems()
    
  }

}
