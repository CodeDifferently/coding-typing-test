import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LargeActionCardComponent } from './large-action-card/large-action-card.component';
import { CollectionContainerComponent } from './collection-container/collection-container.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
@NgModule({
  declarations: [
    AppComponent,
    LargeActionCardComponent,
    CollectionContainerComponent,
    StatisticsComponent
  ],
  imports: [
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
