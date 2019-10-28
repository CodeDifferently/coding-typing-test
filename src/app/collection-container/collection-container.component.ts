import { Component, OnInit, Input } from '@angular/core';
import { LargeActionCardComponent } from '../large-action-card/large-action-card.component';
import { CollectionItem } from '../collection-item';
import { StatisticsItem } from '../statistics-model';
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
    background: "../assets/img/typingcode.jpg",
  };
  secondItem: CollectionItem = {
    title: "Nafis Loves Angular",
    subtitle: "Sike Just Playing its okay",
    text: "Naz said this ^",
    link: "somewebsite.com",
    background: "../assets/img/typingcode.jpg"
  };
  statistics: StatisticsItem = {
    presentSpeed: 22,
    lastWeekSpeed: 12,
    lastMonthsSpeed: 12,
    currentTimeSpent: 5,
    weeklyTimeSpent: 0,
    keyBoardCoverage: 0,
    accuracy: 14,
    averagePracticeTime: 18
  }
  @Input() collectionTitle: String;

  collectionItems: Array<CollectionItem> = [this.firstItem, this.secondItem, this.firstItem, this.firstItem,this.firstItem,this.firstItem,this.firstItem,this.firstItem,];
  constructor() { }

  ngOnInit() {
  }

}
