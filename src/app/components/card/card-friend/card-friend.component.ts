import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../game/game/services/game.service';
import { CardUserModel } from './model/card-user.model';

@Component({
  selector: 'app-card-friend',
  templateUrl: './card-friend.component.html',
  styleUrls: ['./card-friend.component.css']
})
export class CardFriendComponent implements OnInit {

  @Input()
  user: CardUserModel;
  @Input()
  pending : boolean

  constructor(private readonly gameService : GameService, private router: Router) { }

  ngOnInit(): void {
  }

  onClick(_id: string) {
    this.router.navigateByUrl('/profil/' + _id + '');
  }

}
