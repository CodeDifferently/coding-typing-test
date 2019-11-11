import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { GameSummaryComponent } from './game-summary-bar/game-summary-bar.component';
import { LessonPlanDashboardComponent }  from './lesson-plan-dashboard/lesson-plan-dashboard.component'
import { GamePageComponent } from './game-page/game-page.component';

const routes: Routes = [
  { path: 'game-summary', component: GameSummaryComponent  },
  { path: 'lesson-plan-dashboard', component: LessonPlanDashboardComponent  },
  { path: 'game-page', component: GamePageComponent  },
  { path: '', redirectTo: '/game-summary', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
