import { Component, OnInit, Input } from '@angular/core';
import { GameCollectionItem } from '../game-collection-item';

@Component({
  selector: 'game-collection-container',
  templateUrl: './game-collection-container.component.html',
  styleUrls: ['./game-collection-container.component.css']
})
export class GameCollectionContainerComponent implements OnInit {

gameCollectionItem: GameCollectionItem = {
    title: " 1 ",
    link: "somewebsite.com",
    background: "../assets/img/typingcode.jpg",
    locked:true, 
    subtitle: "Sike Just Playing its okay",    
  };
  
  @Input() gameCollectionTitle: String;

  gameCollectionItems: Array<GameCollectionItem> = [this.gameCollectionItem];
  

  constructor() { }

  ngOnInit() {
  }

}
