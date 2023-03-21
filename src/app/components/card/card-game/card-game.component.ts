import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardGameModel } from './model/card-game.model';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {

  @Input()
  game: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(_id: string) {
    this.router.navigateByUrl('/jeu/' + _id + '');
  }
}
