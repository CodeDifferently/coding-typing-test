import { Component, OnInit, Input } from '@angular/core';
import { CollectionItem } from 'src/app/collection-item';

@Component({
  selector: 'large-action-card',
  templateUrl: './large-action-card.component.html',
  styleUrls: ['./large-action-card.component.css']
})
export class LargeActionCardComponent implements OnInit {
  @Input() id: Number;
  @Input() collectionItem: CollectionItem;

  constructor() { }

  ngOnInit() {
  }

}
