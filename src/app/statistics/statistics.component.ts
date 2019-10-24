import { Component, OnInit, Input } from '@angular/core';
import { StatisticsItem } from '../statistics-model';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() title_1: String;
  @Input() title_2: String;
  @Input() statistics: StatisticsItem;
  constructor() { }

  ngOnInit() {
  }

}
