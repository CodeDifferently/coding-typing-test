import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { GameSummaryComponent } from './game-summary-bar/game-summary-bar.component';


const routes: Routes = [
  { path: 'game-summary', component: GameSummaryComponent  },
  { path: '', redirectTo: '/game-summary', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
