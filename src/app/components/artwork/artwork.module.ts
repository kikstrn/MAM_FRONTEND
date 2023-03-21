import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { ArtworkRoutingModule } from "./artwork-routing.module";
import { ArtworkComponent } from "./artwork.component";
import { ArtworkService } from "./service/artwork.service";

@NgModule({
  declarations: [
    ArtworkComponent
  ],
  imports: [
    CommonModule,
    ArtworkRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports : [
    ArtworkComponent
  ],
  providers: [
    ArtworkService
  ]
})
export class ArtworkModule { }
