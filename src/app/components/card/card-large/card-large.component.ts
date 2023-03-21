import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardGameModel } from './model/card-game.model';

@Component({
  selector: 'app-card-large',
  templateUrl: './card-large.component.html',
  styleUrls: ['./card-large.component.css']
})
export class CardLargeComponent implements OnInit {

  @Input()
  game!: CardGameModel;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(_id: string) {
    this.router.navigateByUrl('/jeu/' + _id + '');
  }
}
