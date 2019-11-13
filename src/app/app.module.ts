import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LargeActionCardComponent } from './large-action-card/large-action-card.component';
import { CollectionContainerComponent } from './collection-container/collection-container.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { GameSummaryComponent } from './game-summary-bar/game-summary-bar.component';
import { LessonPlanDashboardComponent } from './lesson-plan-dashboard/lesson-plan-dashboard.component';
import { GamePageComponent } from './game-page/game-page.component';
import { SmallActionCardComponent } from './small-action-card/small-action-card.component';
import { GameCollectionContainerComponent } from './game-collection-container/game-collection-container.component';
import { PlacementTestPopoverComponent } from './placement-test-popover/placement-test-popover.component';
@NgModule({
  declarations: [
    AppComponent,
    LargeActionCardComponent,
    CollectionContainerComponent,
    StatisticsComponent,
    GameSummaryComponent,
    LessonPlanDashboardComponent,
    GamePageComponent,
    SmallActionCardComponent,
    GameCollectionContainerComponent,
     PlacementTestPopoverComponent,
    
  ],
  imports: [
    NgbModule,
    BrowserModule,
    ProgressbarModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 50,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      showSubtitle: false
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
