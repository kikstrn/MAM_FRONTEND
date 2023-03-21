import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { GameService } from './services/game.service';
import { UserModel } from './models/user/user';
import { GameModel } from './models/game/game.model';
import { plainToClass } from 'class-transformer';
import { UserService } from './services/user.service';
import { ReviewModel } from '../game-review/models/review.model';
import { SessionService } from '../../../core/services/session.service';
import { GameDescriptionComponent } from './dialog/game-description.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  _id: string;
  game: GameModel = new GameModel();
  reviews: ReviewModel[] = [];
  videos: SafeResourceUrl[] = []
  released: boolean = false;
  eventActive = false;
  reviewActive = false;
  readMore: boolean;
  user: UserModel;
  buttonGame: string = "S'abonner"
  addOrRemove: boolean = true;
  index: number;

  constructor(private route: ActivatedRoute, public gameService: GameService, private dom: DomSanitizer, public dialog: MatDialog, public cookieService: CookieService, private router: Router, public userService: UserService, private readonly sessionService: SessionService) { }


  ngOnInit(): void {
    
    const user = this.sessionService.getSession()!;
    if(user) this.user = plainToClass(UserModel, user);
    
    this._id = this.route.snapshot.paramMap.get('id') as string;

    if (this._id) {
      this.gameService.findById(this._id).subscribe({
        next: (game: GameModel) => {
          if(game){
            this.game = plainToClass(GameModel, game);
            this.game.first_release_date = new Date(game.first_release_date);
          } 
          
          if (game.videos[0]) this.videos.push(this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + game.videos[0].video_id))
          if (game.videos[1]) this.videos.push(this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + game.videos[1].video_id))
          if (new Date(game.first_release_date) <= new Date) this.released = true;
          if(game.summary_trad_fr){
            game.summary_trad_fr.length > 800 ? this.readMore = false : this.readMore = true;
          }else if(game.summary){
            game.summary.length > 800 ? this.readMore = false : this.readMore = true;
          }
          
        },
        complete: () => { },
        error: (error) => { console.log(error) }
      });
    }
    if (this.user) {
      const game = this.user.games.find(game => game._id === this._id);
      game ? this.index = this.user.games.indexOf(game) : this.index = -1;
      if (this.index != -1) {
        this.buttonGame = "Se désabonner"
        this.addOrRemove = false;
      }
      else {
        this.buttonGame = "S'abonner"
        this.addOrRemove = true;
      }
    }
    
  }

  onClickAnswers() {
    var btnReviews = document.getElementsByClassName('btn-reviews') as HTMLCollectionOf<HTMLElement>;
    btnReviews[0].style.backgroundColor = "var(--secondary-color)"
    var btnEvents = document.getElementsByClassName('btn-events') as HTMLCollectionOf<HTMLElement>;
    btnEvents[0].style.backgroundColor = "#1F1F1F"
    this.reviewActive = true;
    this.eventActive = false
  }

  onClickEvents() {
    var btnReviews = document.getElementsByClassName('btn-reviews') as HTMLCollectionOf<HTMLElement>;
    btnReviews[0].style.backgroundColor = "#1F1F1F"
    var btnEvents = document.getElementsByClassName('btn-events') as HTMLCollectionOf<HTMLElement>;
    btnEvents[0].style.backgroundColor = "var(--secondary-color)"
    this.eventActive = true
    this.reviewActive = false;
  }

  clickGame() {
    const user = this.sessionService.getSession();
    if(user) this.user = plainToClass(UserModel, user);
    
    if (this.cookieService.get("token_mam") != "") {
      if (this.addOrRemove) {
        this.user.games.push(this.game)
        this.addOrRemove = false;
        this.buttonGame = "Se désabonner"
      }
      else {
        this.user.games.splice(this.index, 1)
        this.addOrRemove = true;
        this.buttonGame = "S'abonner"
      }
      this.userService.update(this.user).subscribe({
        next: () => {
          this.sessionService.setSession(this.user);
        },
        complete: () => { },
        error: (error: any) => { console.log(error) }
      });
    }
    else {
      this.router.navigate(['/connexion']);
    }
  }

  scrollLeft() {
    let scrollValue = document.getElementById('container-galery')!.scrollLeft - 800;
    document.getElementById('container-galery')!.scrollTo({
      left: scrollValue,
      behavior: 'smooth'
    });
  }
  scrollRight() {
    let scrollValue = document.getElementById('container-galery')!.scrollLeft + 800;
    document.getElementById('container-galery')!.scrollTo({
      left: scrollValue,
      behavior: 'smooth'
    });
  }

  openDialogDescription() {
    let dialogDescription = this.dialog.open(GameDescriptionComponent)
    dialogDescription.componentInstance.description = this.game.summary_trad_fr ? this.game.summary_trad_fr : this.game.summary;
  }
}
