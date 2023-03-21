import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { plainToInstance } from 'class-transformer';
import { SessionService } from '../../core/services/session.service';
import { UserFriendModel } from './model/user-friend.model';
import { UserModel } from './model/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  user: UserModel;
  pendingFriends : UserFriendModel[];
  
  constructor(
    private readonly sessionService: SessionService, 
    private readonly userService : UserService, 
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.sessionService.getSession()!;
    if(!this.user){
      this.router.navigate(["/connexion"])
    }
    else{
      this.userService.getPendinFriends(this.user._id).subscribe({
        next: (users: UserFriendModel[]) => {
          this.pendingFriends = plainToInstance(UserFriendModel, users); 
        },
        complete: () => { },
        error: (error: any) => { console.log(error) }
      });
    }
  }
}
