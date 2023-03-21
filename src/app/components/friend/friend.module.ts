import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendComponent } from './friend.component';
import { MaterialModule } from "src/app/material.module";
import { FriendRoutingModule } from './friend-routing.module';
import { CardFriendModule } from '../card/card-friend/card-friend.module';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    FriendComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FriendRoutingModule,
    CardFriendModule
  ],
  exports : [
    FriendComponent
  ],
  providers: [UserService]
})
export class FriendModule { }
