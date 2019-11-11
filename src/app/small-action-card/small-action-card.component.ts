import { Component, OnInit, Input } from '@angular/core';
import { GameCollectionItem } from 'src/app/game-collection-item';

@Component({
  selector: 'app-small-action-card',
  templateUrl: './small-action-card.component.html',
  styleUrls: ['./small-action-card.component.css']
})
export class SmallActionCardComponent implements OnInit {
  
  @Input() id: Number;
  @Input() gameCollectionItem: GameCollectionItem;
  
  constructor() { }

  ngOnInit() {
  }

}
