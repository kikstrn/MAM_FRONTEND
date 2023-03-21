import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "src/app/material.module";
import { CardEventComponent } from './card-event.component';
import { EventService } from './service/event.service';


@NgModule({
  declarations: [
    CardEventComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [
    CardEventComponent
  ],
  providers: [EventService]
})
export class CardEventModule { }
