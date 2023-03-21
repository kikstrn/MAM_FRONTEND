import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { DetailImageComponent } from "./detail-image.component";

@NgModule({
  declarations: [
    DetailImageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports : [
    DetailImageComponent
  ],
  providers: []
})
export class DetailImageModule { }
