import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { CardGameModule } from "../../card/card-game/card-game.module";
import { GameService } from "../game/services/game.service";
import { GameLibraryRoutingModule } from "./game-library-routing.module";
import { GameLibraryComponent } from "./game-library.component";

@NgModule({
  declarations: [
    GameLibraryComponent
  ],
  imports: [
    CardGameModule,
    CommonModule,
    GameLibraryRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  exports : [
    GameLibraryComponent
  ],
  providers: [GameService]
})
export class GameLibraryModule { }
