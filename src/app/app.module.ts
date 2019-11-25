import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LargeActionCardComponent } from './large-action-card/large-action-card.component';
import { CollectionContainerComponent } from './collection-container/collection-container.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { LoginComponent } from './login/login.component';
import { BadgesComponent } from './badges/badges.component';
import { BadgeComponent } from './badge/badge.component';


@NgModule({
  declarations: [
    AppComponent,
    LargeActionCardComponent,
    CollectionContainerComponent,
    StatisticsComponent,
    LoginComponent,
    BadgesComponent,
    BadgeComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
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
