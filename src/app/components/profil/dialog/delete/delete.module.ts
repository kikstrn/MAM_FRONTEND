import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { DeleteComponent } from './delete.component';

@NgModule({
  declarations: [
    DeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports : [
    DeleteComponent
  ],
})
export class GameDescriptionModule { }
