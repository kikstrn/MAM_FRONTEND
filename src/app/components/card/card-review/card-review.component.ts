import { DatePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionService } from 'src/app/core/services/session.service';
import { GenericMessageSnackBarComponent } from '../../shared/SnackBars/GenericMessageSnackBarComponent';
import { CardReviewModel } from './model/card-review.model';
import { ReviewService } from './service/review.service';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.css']
})
export class CardReviewComponent implements OnInit, AfterViewInit {

  @Input()
  review: CardReviewModel;
  @Input()
  isOdd: boolean;
  @Input()
  index: number;

  // dateReview: string;
  goodRating: boolean;
  isAuthor: boolean;

  constructor(public dialog: MatDialog, public datePipe: DatePipe, private cdref: ChangeDetectorRef, private reviewService : ReviewService, private snackbar: MatSnackBar, private readonly sessionService : SessionService) { }

  ngAfterViewInit(): void {
    const user = this.sessionService.getSession()!;
    var element = document.getElementById(this.index.toString()) as HTMLElement;
    if (this.index % 2) element.className = "card2"
    if (this.review.rating > 4) this.goodRating = true;
    this.cdref.detectChanges();

    if(user){
      if(this.review.author._id == user._id || (this.sessionService.getSession() && this.sessionService.getSession().isAdmin)) {
        this.isAuthor = true; 
      }
    }
  }

  ngOnInit(): void {
  }

  deleteReview() {
    this.reviewService.delete(this.review._id).subscribe(
      {
        next: (res) => {
          this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar('Avis Supprimé');
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
}
