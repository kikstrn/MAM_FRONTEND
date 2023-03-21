import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { CardReviewModule } from "../../card/card-review/card-review.module";
import { GameReviewComponent } from "./game-review.component";
import { ReviewService } from "./services/review.service";

@NgModule({
  declarations: [
    GameReviewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CardReviewModule
  ],
  exports : [
    GameReviewComponent
  ],
  providers: [ReviewService]
})
export class GameReviewModule { }
