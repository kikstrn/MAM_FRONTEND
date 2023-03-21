import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDescriptionComponent } from './game-description.component';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";

@NgModule({
  declarations: [
    GameDescriptionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports : [
    GameDescriptionComponent
  ],
})
export class GameDescriptionModule { }
