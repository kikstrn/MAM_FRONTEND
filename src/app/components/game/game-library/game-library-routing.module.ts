import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLibraryComponent } from './game-library.component';

const routes: Routes = [
  { path: '', component: GameLibraryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameLibraryRoutingModule { }