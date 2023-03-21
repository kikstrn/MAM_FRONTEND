import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { CardGameComponent } from "./card-game.component";

@NgModule({
  declarations: [
    CardGameComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [
    CardGameComponent
  ],
  providers: []
})
export class CardGameModule { }