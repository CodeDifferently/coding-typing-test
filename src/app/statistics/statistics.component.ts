import { Component, OnInit, Input } from '@angular/core';
import { StatisticsItem } from '../statistics-model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() statistics: StatisticsItem;
  constructor() { }

  ngOnInit() {
  }

}
