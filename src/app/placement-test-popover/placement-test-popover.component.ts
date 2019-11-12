import { Component, OnInit } from '@angular/core';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'placement-test-popover',
  templateUrl: './placement-test-popover.component.html',
  styleUrls: ['./placement-test-popover.component.css'],
  providers: [NgbPopoverConfig]

})
export class PlacementTestPopoverComponent implements OnInit {

  constructor(config: NgbPopoverConfig) {
    // customize default values of popovers used by this component tree
    config.placement = 'right';
    config.triggers = 'hover';
  }

  ngOnInit() {
  }

}
