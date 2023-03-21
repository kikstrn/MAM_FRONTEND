import { DatePipe } from '@angular/common';
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AxiosError } from 'axios';
import { plainToClass, plainToInstance } from 'class-transformer';
import { SessionService } from 'src/app/core/services/session.service';
import { GenericMessageSnackBarComponent } from '../../shared/SnackBars/GenericMessageSnackBarComponent';
import { EventModel } from './model/event.model';
import { EventService } from './service/event.service';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.css']
})
export class CardEventComponent implements OnInit, AfterViewInit {

  @Input()
  event: EventModel;
  @Input()
  index: number;
  isAuthor = false;
  start_event: string;
  end_event: string;
  remaining: number;

  constructor(public datePipe: DatePipe, private cdref: ChangeDetectorRef, private snackbar: MatSnackBar, private eventService: EventService, private sessionService : SessionService) { }

  ngOnInit(): void {
    this.event = plainToInstance(EventModel, this.event);
  }

  ngAfterViewInit(): void {
    this.changeRemainingPlace();         
    const user = this.sessionService.getSession()!;
    if (new Date(this.event.start_event) <= new Date || this.event.players.length - 1 >= this.event.max_nb_player) {
      var element = document.getElementById(this.index.toString()) as HTMLElement;
      element.className = "card2";
      (<HTMLInputElement>document.querySelector('#button' + this.index.toString())).style.display = "none";
      (<HTMLElement>document.querySelector('#remaining' + this.index.toString())).style.display = "none";
    }
    if (this.remaining <= 0 && this.event.players.find(player => player._id === user._id) == null) {
      (<HTMLInputElement>document.querySelector('#button' + this.index.toString())).style.display = "none";
    }
    if(this.sessionService.getSession()!.isAdmin || this.event.master._id == user._id) {
      this.isAuthor = true; 
    }

    // this.start_event = this.datePipe.transform(this.event.start_event, 'dd/MM/yyyy hh:mm')!
    // this.end_event = this.datePipe.transform(this.event.end_event, 'dd/MM/yyyy hh:mm')!

    this.remaining = this.event.max_nb_player - this.event.players.length;
    this.cdref.detectChanges();
    
    if(user) {
      var isParticipant = this.event.players.find(player => player._id === user._id) ? true : false;
      if(isParticipant) {
        this.changeBtnStyle(true);
      }
      else{
        this.changeBtnStyle(false);
      }
    }
  }

  joinOrLeaveEvent() {
    var btn = document.getElementById("button"+this.index.toString()) as HTMLElement;
    var remaining = document.getElementById("remaining"+this.index.toString()) as HTMLElement;
    if(btn.innerText == "Participer") {
      this.eventService.participate(this.event._id).subscribe(
        {
          next: (res) => {
            this.event = plainToInstance(EventModel, res);
            this.changeRemainingPlace();         
            this.changeBtnStyle(true);            
            this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar('Participation Validée');
          },
          complete: () => {
          },
          error: (err) => {
            if(err.status === 401) {
              this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar('Connectez vous');
            }
            else if(err.status === 400){
              this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar(err.error.message);
            }
          }
        }
      )
      
    }
    else{
      this.eventService.unParticipate(this.event._id).subscribe(
        {
          next: (res) => {
            this.event = plainToInstance(EventModel, res);
            this.changeRemainingPlace();         
            this.changeBtnStyle(false);
            this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar('Désinscription Validée');
          },
          complete: () => {
          },
          error: (err) => {
            if(err.status === 400){
              this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar(err.error.message);
            }
          }
        }
      )
    }   
  }

  deleteEvent() {
    this.eventService.delete(this.event._id).subscribe(
      {
        next: (res) => {
          this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar('Evenement Supprimé');
          var card = document.getElementById(this.index.toString()) as HTMLElement;
          card.style.display = "none";
        },
        complete: () => {
        },
        error: (err) => {
          console.log(err.code)
        }
      }
    )
  }

  changeBtnStyle(participate : boolean) {
    var btn = document.getElementById("button"+this.index.toString()) as HTMLElement;
    if(participate) {
      btn.style.backgroundColor = "grey";
      btn.style.color = "white";
      btn.textContent = "Se désinscrire";
    }
    else{
      btn.style.backgroundColor = "var(--secondary-color)";
      btn.style.color = "white";
      btn.textContent = "Participer";
    }
  }

  changeRemainingPlace() {
    var remaining = document.getElementById("remaining"+this.index.toString()) as HTMLElement;
    this.remaining = this.event.max_nb_player - (this.event.players.length);
    remaining.textContent = 'Place Restante : ' + this.remaining.toString();
  }
}