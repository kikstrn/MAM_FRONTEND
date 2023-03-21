import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { CardGameModule } from "../card/card-game/card-game.module";
import { CardLargeModule } from "../card/card-large/card-large.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CardGameModule,
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    CardLargeModule
  ],
  exports : [
    HomeComponent
  ],
  providers: []
})
export class HomeModule { }
