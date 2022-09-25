import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardCount = new Subject<number>()
  card : Product[] = []


  constructor() { }

  getCardItems() {
    return this.card
  }

  addToCard(product: Product) {
    this.card.push(product)
  }





}
