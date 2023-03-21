import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { CardEventModule } from "../../card/card-event/card-event.module";
import { GameEventComponent } from "./game-event.component";
import { EventService } from "./services/event.service";

@NgModule({
  declarations: [
    GameEventComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CardEventModule
  ],
  exports : [
    GameEventComponent
  ],
  providers: [EventService]
})
export class GameEventModule { }
