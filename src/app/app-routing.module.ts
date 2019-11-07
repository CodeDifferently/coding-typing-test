import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { GameSummaryComponent } from './game-summary/game-summary.component';


const routes: Routes = [
  { path: 'GameSummary', component: GameSummaryComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
