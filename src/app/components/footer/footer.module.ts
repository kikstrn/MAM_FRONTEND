import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { FooterComponent } from "./footer.component";

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [
    FooterComponent
  ],
  providers: []
})
export class FooterModule { }
