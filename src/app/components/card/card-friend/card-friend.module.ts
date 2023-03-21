import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFriendComponent } from './card-friend.component';
import { MaterialModule } from "src/app/material.module";
import { CardGameModule } from '../card-game/card-game.module';
import { GameService } from '../../game/game/services/game.service';


@NgModule({
  declarations: [
    CardFriendComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CardGameModule
  ],
  exports : [
    CardFriendComponent
  ],
  providers: [GameService]
})
export class CardFriendModule { }
