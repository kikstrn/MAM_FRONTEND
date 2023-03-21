import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { plainToInstance } from 'class-transformer';
import { CookieService } from 'ngx-cookie-service';
import { NewEventComponent } from './dialog/new-event.component';
import { EventModel } from './models/event.model';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-game-event',
  templateUrl: './game-event.component.html',
  styleUrls: ['./game-event.component.css']
})
export class GameEventComponent implements OnInit {

  @Input()
  _id!: string;

  events: EventModel[] = [];

  constructor(public dialog: MatDialog, public eventService: EventService, private route: ActivatedRoute, private router: Router, public cookieService: CookieService) { }

  ngOnInit(): void {
    this.eventService.findByGame(this._id).subscribe({
      next: (events: EventModel[]) => {
        this.events = plainToInstance(EventModel, events);
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });
  }

  openDialogEvent() {
    if (this.cookieService.get("token_mam") != "") {
      this.dialog.open(NewEventComponent)
    }
    else {
      this.router.navigate(['/connexion']);
    }
  }
}
