import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { GameEventModule } from "../game-event/game-event.module";
import { GameReviewModule } from "../game-review/game-review.module";
import { GameDescriptionModule } from "./dialog/game-description.module";
import { GameRoutingModule } from "./game-routing.module";
import { GameComponent } from "./game.component";
import { GameService } from "./services/game.service";

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    GameRoutingModule,
    CommonModule,
    MaterialModule,
    GameEventModule,
    GameReviewModule,
    GameDescriptionModule
  ],
  exports : [
    GameComponent
  ],
  providers: [GameService]
})
export class GameModule { }
