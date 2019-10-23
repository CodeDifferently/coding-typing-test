import { Component, OnInit, Input } from '@angular/core';
import { LargeActionCardComponent } from '../large-action-card/large-action-card.component';
import { CollectionItem } from '../collection-item';
@Component({
  selector: 'collection-container',
  templateUrl: './collection-container.component.html',
  styleUrls: ['./collection-container.component.css']
})
export class CollectionContainerComponent implements OnInit {
  firstItem: CollectionItem = {
    title: "Nafis Loves Angular",
    subtitle: "Sike Just Playing its okay",
    text: "Naz said this ^",
    link: "somewebsite.com",
    background: "hi",
  };
  secondItem: CollectionItem = {
    title: "Nafis Loves Angular",
    subtitle: "Sike Just Playing its okay",
    text: "Naz said this ^",
    link: "somewebsite.com",
    background: "hello"
  };
  
  collectionItems: Array<CollectionItem> = [this.firstItem, this.secondItem];
  constructor() { }

  ngOnInit() {
  }

}
