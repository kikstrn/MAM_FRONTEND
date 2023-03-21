import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { GameService } from "../services/game.service";
import { NewEventComponent } from "./new-event.component";

@NgModule({
  declarations: [
    NewEventComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports : [
    NewEventComponent
  ],
  providers: [GameService]
})
export class NewEventModule { }
