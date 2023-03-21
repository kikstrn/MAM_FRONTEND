import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { GameService } from "../services/game.service";
import { NewReviewComponent } from "./new-review.component";

@NgModule({
  declarations: [
    NewReviewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports : [
    NewReviewComponent
  ],
  providers: [GameService]
})
export class NewReviewModule { }
