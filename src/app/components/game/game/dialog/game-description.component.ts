import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.css']
})
export class GameDescriptionComponent implements OnInit {

  @Input()
  description: string;
  
  constructor() { }

  ngOnInit(): void {
  }
}
