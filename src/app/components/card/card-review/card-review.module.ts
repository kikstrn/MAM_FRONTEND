import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardReviewComponent } from './card-review.component';
import { MaterialModule } from "src/app/material.module";
import { ReviewService } from './service/review.service';

@NgModule({
  declarations: [
    CardReviewComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports : [
    CardReviewComponent
  ],
  providers: [ReviewService]
})
export class CardReviewModule { }
