import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NewReviewComponent } from './dialog/new-review.component';
import { ReviewModel } from './models/review.model';
import { ReviewService } from './services/review.service';

@Component({
  selector: 'app-game-review',
  templateUrl: './game-review.component.html',
  styleUrls: ['./game-review.component.css']
})
export class GameReviewComponent implements OnInit {

  @Input()
  _id!: string;
  
  reviews: Array<ReviewModel>;

  constructor(public dialog: MatDialog, private router: Router, public reviewService: ReviewService, public cookieService: CookieService) { }

  ngOnInit(): void {
    this.reviewService.findByGame(this._id).subscribe({
      next: (reviews: ReviewModel[]) => {
        this.reviews = reviews;
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });
  }

  openDialogQuestion() {
    if (this.cookieService.get("token_mam") != "") {
      this.dialog.open(NewReviewComponent)
    }
    else {
      this.router.navigate(['/connexion']);
    }
  }
}