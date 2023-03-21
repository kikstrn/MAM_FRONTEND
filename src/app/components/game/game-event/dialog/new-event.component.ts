import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericMessageSnackBarComponent } from 'src/app/components/shared/SnackBars/GenericMessageSnackBarComponent';
import { CookieService } from 'ngx-cookie-service';
import { DatePipe } from '@angular/common';
import { GameService } from '../services/game.service';
import { GameModel } from '../models/game/game.model';
import { UserService } from '../services/user.service';
import { EventService } from '../services/event.service';
import { SessionService } from 'src/app/core/services/session.service';
import { CreateEventModel } from '../models/create-event.model';
import { UserModel } from '../models/user/user';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  formGroup = this.formBuilder.group({
    'title': [null, [Validators.required, Validators.minLength(2), Validators.maxLength(75)]],
    'description': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(150)]],
    'max_nb_player': [null, [Validators.required, Validators.minLength(1)]],
    'startEvent': [null, [Validators.required]],
    'endEvent': [null, Validators.required],
  });
  titleAlert: string = 'Ce champ est obligatoire';
  post: any = '';
  user: UserModel;
  _id: string;
  game: GameModel;
  minDate : Date = new Date();
  minDateForMax : Date = new Date();

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, public snackbar: MatSnackBar, public gameService: GameService, private dialogRef: MatDialogRef<NewEventComponent>, public eventService: EventService, public userService: UserService, public cookieService: CookieService, private readonly sessionService: SessionService, private readonly datePipe: DatePipe) { }

  ngOnInit(): void {
    this._id = this.route.firstChild?.snapshot.paramMap.get('id') as string;
    this.gameService.findById(this._id).subscribe({
      next: (game: GameModel) => {
        this.game = game;
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });
    this.user = this.sessionService.getSession()!;       

    this.formGroup.get("startEvent")?.valueChanges.subscribe(data => {
      this.minDateForMax = this.formGroup.get("startEvent")?.value
    })
  }

  onSubmit(post: any) {
    let eventCreate = new CreateEventModel();
    eventCreate.title = this.formGroup.get("title")?.value;
    eventCreate.description = this.formGroup.get("description")?.value;
    eventCreate.max_nb_player = this.formGroup.get("max_nb_player")?.value;
    eventCreate.start_event = new Date(this.formGroup.get("startEvent")?.value);
    eventCreate.end_event = new Date(this.formGroup.get("endEvent")?.value);
    eventCreate.master = this.user;
    eventCreate.game = this.game;
    this.eventService.create(eventCreate).subscribe({
      next: (event: CreateEventModel) => {
        this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar(
          'Votre événement a bien été créé'
        );
        this.dialogRef.close();
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currentUrl]);
        });
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });
  }
}
