import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLargeComponent } from './card-large.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    CardLargeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [
    CardLargeComponent
  ],
})
export class CardLargeModule { }
