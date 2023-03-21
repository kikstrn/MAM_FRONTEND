import { NumberFormatStyle } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericMessageSnackBarComponent } from 'src/app/components/shared/SnackBars/GenericMessageSnackBarComponent';
import jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { PayloadToken } from './model/payload.model';
import { GameService } from '../services/game.service';
import { UserService } from '../services/user.service';
import { ReviewService } from '../services/review.service';
import { CreateReviewModel } from '../models/create-review';
import { GameModel } from '../models/game/game.model';
import { UserModel } from '../models/user/user';
import { ReviewModel } from '../models/review.model';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  formGroup = this.formBuilder.group({
    'title': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(75)]],
    'description': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(400)]],
    'goodPoint': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
    'badPoint': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    'rating': [null, Validators.required],
  });
  titleAlert: string = 'Ce champ est obligatoire';
  post: any = '';
  rating: number = 0;
  totalStar: number = 10;
  ratingArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  game: GameModel;
  _id: string;
  user: UserModel;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, public snackbar: MatSnackBar, private dialogRef: MatDialogRef<NewReviewComponent>, public gameService: GameService, public reviewService: ReviewService, public userService: UserService, public cookieService: CookieService) { }

  ngOnInit(): void {    
    this._id = this.route.firstChild?.snapshot.paramMap.get('id') as string;
    this.gameService.findById(this._id).subscribe({
      next: (game: GameModel) => {
        this.game = game;
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });
    const token_info = jwt_decode(this.cookieService.get("token_mam")) as PayloadToken;
    this.userService.findById(token_info._id).subscribe({
      next: (user: UserModel) => {
        this.user = user;
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });
  }

  onRatingChanged(rating: number) {
    this.rating = rating;
    this.formGroup.get("rating")?.setValue(rating);
  }

  iconStatus(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onSubmit(post: any) {
    let a = new CreateReviewModel();
    a.title = this.formGroup.get("title")?.value;
    a.review = this.remove_linebreaks(this.formGroup.get("description")?.value);
    a.bad_point = this.formGroup.get("badPoint")?.value;
    a.good_point = this.formGroup.get("goodPoint")?.value;
    a.rating = this.formGroup.get("rating")?.value;
    a.game = this.game;
    a.author = this.user;
    this.reviewService.create(a).subscribe({
      next: (review: ReviewModel) => {
        if (review._id != null) {
          this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar('Votre avis a bien été envoyé');
          this.dialogRef.close();
          let currentUrl = this.router.url;
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([currentUrl]);
          });
        }
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });
  }

  remove_linebreaks(str : string) {
    return str.replace( /[\r\n]+/gm, "" );
  }
}
