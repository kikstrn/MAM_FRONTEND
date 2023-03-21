import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUserAdminComponent } from './card-user-admin.component';
import { MaterialModule } from "src/app/material.module";
import { CardGameModule } from '../card-game/card-game.module';
import { UserService } from './service/user.service';


@NgModule({
  declarations: [
    CardUserAdminComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CardGameModule
  ],
  exports : [
    CardUserAdminComponent
  ],
  providers: [UserService]
})
export class CardUserAdminModule { }
