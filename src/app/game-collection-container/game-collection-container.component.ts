import { Component, OnInit, Input } from '@angular/core';
import { GameCollectionItem } from '../game-collection-item';

@Component({
  selector: 'game-collection-container',
  templateUrl: './game-collection-container.component.html',
  styleUrls: ['./game-collection-container.component.css']
})
export class GameCollectionContainerComponent implements OnInit {

 FirstItem: GameCollectionItem = {
    title: " 1 ",
    link: "somewebsite.com",
    background: "../assets/img/typingcode.jpg",
    locked:true, 
    subtitle: "typing code",    
  };
  
 SecondtItem: GameCollectionItem = {
  title: " 1 ",
  link: "somewebsite.com",
  background: "../assets/img/typingcode.jpg",
  locked:true, 
  subtitle: "typing code",    
};
  
  @Input() gameCollectionTitle: String;

  gameCollectionItems: Array<GameCollectionItem> = [this.FirstItem, this.SecondtItem, this.FirstItem, this.FirstItem,this.FirstItem,this.FirstItem,this.FirstItem,this.FirstItem,this.FirstItem,this.FirstItem,this.FirstItem,this.FirstItem,];
  

  constructor() { }

  ngOnInit() {
  }

}
