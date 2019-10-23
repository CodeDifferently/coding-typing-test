import { Component } from '@angular/core';
import { CollectionItem } from 'src/app/collection-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstItem: CollectionItem = {
    title: "Nafis Loves Angular",
    subtitle: "Sike Just Playing its okay",
    text: "Naz said this ^",
    link: "somewebsite.com",
    background: "../assets/img/typingcode.jpg",
  };
  secondItem: CollectionItem = {
    title: "Nafis Loves Angular",
    subtitle: "Sike Just Playing its okay",
    text: "Naz said this ^",
    link: "somewebsite.com",
    background: "../assets/img/typingcode.jpg"
  };
  
  collectionItems: Array<CollectionItem> = [this.firstItem, this.secondItem];

  
   
   constructor() {
  }
  
  
  title = 'coding-typing-test';
}
