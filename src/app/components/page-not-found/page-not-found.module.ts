import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { PageNotFoundComponent } from "./page-not-found.component";

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [
    PageNotFoundComponent
  ],
  providers: []
})
export class PageNotFoundModule { }
