import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cardCount !: number
  constructor(private cardservice: CardService) { }

  ngOnInit(): void {
    this.cardservice.cardCount.subscribe((num)=> {
      this.cardCount = num
    })
  }

}
