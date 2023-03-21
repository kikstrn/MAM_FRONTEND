import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from './models/user.model';
import { ProfilService } from './services/profil.service';
import { Game } from './models/game/game/game.model';
import { ReviewModel } from './models/review.model';
import { ReviewService } from './services/review.service';
import { EventService } from './services/event.service';
import { EventModel } from './models/event.model';
import { SessionService } from '../../core/services/session.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from './dialog/delete/delete.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit, AfterViewInit {

  _id: string;
  fileToUpload: File;
  formGroup: any;
  post: any = '';
  user: UserModel;
  readUser: boolean = true;
  checkFriends: number = -1;
  buttonFriends = "Ajouter en amis"
  index: number;
  reviews: ReviewModel[];
  events: EventModel[];

  constructor(
    private formBuilder: FormBuilder, 
    public profilService: ProfilService, 
    private readonly route: ActivatedRoute, 
    private readonly reviewService: ReviewService, 
    private readonly eventService : EventService,
    private readonly sessionService: SessionService,
    private router: Router,
    public dialog: MatDialog
    ) { 
      // Permet de rafrachir le composant avec un autre id
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
    }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {    
    let currentUser = this.sessionService.getSession();
    this._id = this.route.snapshot.paramMap.get('id') as string;
      if (this._id && currentUser?._id != this._id) {
        this.profilService.findById(this._id).subscribe({
          next: (user: UserModel) => {
            this.user = user;
            if (currentUser && currentUser.friends.find((user: UserModel) => user._id === this.user._id)) {
              this.checkFriends = 1
              this.buttonFriends = "Retirer des amis"
            }
            this.loadEventsAndReviews();
          },
          complete: () => { },
          error: (error: any) => { console.log(error) }
        });
        
      }
      else {
        this.readUser = false;
        if(currentUser) {
          this.user = currentUser
          this.formGroup = this.formBuilder.group({
            'username': [this.user.username] != null ? [this.user.username] : "",            
          });
          this.loadEventsAndReviews();
        }
      }
  }

  handleFileInput(target: any) {
    if (target.files != null) {
      this.fileToUpload = target.files.item(0);

      const reader = new FileReader();
      reader.readAsDataURL(this.fileToUpload);
      reader.onload = () => {
        if (reader.result) this.user.avatar = reader.result?.toString()
        this.updateUser(this.user);
      };
    }
  }

  loadEventsAndReviews() {
    this.reviewService.findByUser(this.user._id).subscribe({
      next: (reviews: ReviewModel[]) => {
        this.reviews = reviews;       
      },
      complete: () => { },
      error: (error: any) => { console.log(error) }
    });
    this.eventService.findByUser(this.user._id).subscribe({
      next: (events: EventModel[]) => {
        this.events = events;
      },
      complete: () => { },
      error: (error: any) => { console.log(error) }
    });
  }

  edition(event: any) {
    this.user.username = this.formGroup.get("username")?.value;
    let elements = document.querySelectorAll('.edition') as unknown as HTMLCollectionOf<HTMLElement>;
    if (elements != null && elements.length > 0) {
      if (event.target.textContent === 'Modifier') {
        event.target.textContent = 'Sauvegarder'
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.pointerEvents = 'auto';
          elements[i].style.background = 'var(--primary-color-light)';
        }
      } else {
        event.target.textContent = 'Modifier'
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.pointerEvents = 'none';
          elements[i].style.background = 'transparent';
        }
        this.updateUser(this.user);
      }
    }
  }

  updateUser(userUp: UserModel) {
    this.profilService.update(userUp).subscribe({
      next: () => {
        this.user = userUp;
        this.sessionService.setSession(userUp);
      },
      complete: () => { },
      error: (error) => { alert(error.message) }
    });
  }

  getCover(game: Game): string {
    let t = Object.assign(new Game(), game);
    return t.getUrlCover();
  }

  addOrRemoveFriend() {
    let currentUser = this.sessionService.getSession() ? this.sessionService.getSession() : undefined;
    if (this.buttonFriends == "Retirer des amis") {
      this.index = currentUser.friends.findIndex((friend: UserModel) => friend._id === this.user._id);
      currentUser.friends.splice(this.index, 1);
      this.profilService.update(currentUser).subscribe({
        next: () => {
          this.sessionService.setSession(currentUser);
          this.buttonFriends = "Ajouter en amis"
        },
        complete: () => { },
        error: (error) => { console.log(error) }
      })
    }
    else if (this.buttonFriends == "Ajouter en amis") {
      currentUser.friends.push(this.user)
      this.profilService.update(currentUser).subscribe({
        next: () => {
          this.sessionService.setSession(currentUser);
          this.buttonFriends = "Retirer des amis"
        },
        complete: () => { },
        error: (error) => { console.log(error) }
      })
    }
  }

  onClickFriend(_id: string){
    this.router.navigateByUrl('/profil/' + _id + '');
  }

  deleteAccount(){
    let dialogDescription = this.dialog.open(DeleteComponent)
    // this.profilService.delete(idUser._id).subscribe({
    //   next: () => {
    //   },
    //   complete: () => { },
    //   error: (error: any) => { console.log(error) }
    // })
  }

  scrollLeft(i: number) {
    switch (i) {
      case 1:
        let scrollValue1 = document.getElementById('carouselPopularGame')!.scrollLeft - 500;
        document.getElementById('carouselPopularGame')!.scrollTo({
          left: scrollValue1,
          behavior: 'smooth'
        });
        break;
      case 2:
        let scrollValue2 = document.getElementById('carouselMostAnticipated')!.scrollLeft - 500;
        document.getElementById('carouselMostAnticipated')!.scrollTo({
          left: scrollValue2,
          behavior: 'smooth'
        });
        break;
      case 3:
        let scrollValue3 = document.getElementById('carouselRecentlyReleased')!.scrollLeft - 500;
        document.getElementById('carouselRecentlyReleased')!.scrollTo({
          left: scrollValue3,
          behavior: 'smooth'
        });
        break;
      case 4:
        let scrollValue4 = document.getElementById('carouselNextRelease')!.scrollLeft - 500;
        document.getElementById('carouselNextRelease')!.scrollTo({
          left: scrollValue4,
          behavior: 'smooth'
        });
    }
  }
  scrollRight(i: number) {
    switch (i) {
      case 1:
        let scrollValue1 = document.getElementById('carouselPopularGame')!.scrollLeft + 500;
        document.getElementById('carouselPopularGame')!.scrollTo({
          left: scrollValue1,
          behavior: 'smooth'
        });
        break;
      case 2:
        let scrollValue2 = document.getElementById('carouselMostAnticipated')!.scrollLeft + 500;
        document.getElementById('carouselMostAnticipated')!.scrollTo({
          left: scrollValue2,
          behavior: 'smooth'
        });
        break;
      case 3:
        let scrollValue3 = document.getElementById('carouselRecentlyReleased')!.scrollLeft + 500;
        document.getElementById('carouselRecentlyReleased')!.scrollTo({
          left: scrollValue3,
          behavior: 'smooth'
        });
        break;
      case 4:
        let scrollValue4 = document.getElementById('carouselNextRelease')!.scrollLeft + 500;
        document.getElementById('carouselNextRelease')!.scrollTo({
          left: scrollValue4,
          behavior: 'smooth'
        });
    }
  }
}
