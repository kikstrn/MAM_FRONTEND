import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GenericMessageSnackBarComponent } from 'src/app/components/shared/SnackBars/GenericMessageSnackBarComponent';
import { SessionService } from 'src/app/core/services/session.service';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteComponent>, private profilService: ProfilService, private readonly sessionService: SessionService,private snackbar: MatSnackBar,public cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  click_delete(boolDelete: boolean) {
    if(boolDelete){
      const user = this.sessionService.getSession()!;
      this.profilService.deleteById(user._id).subscribe({
        next: () => {
          this.cookieService.delete('token_mam');
		      this.sessionService.clearSession();
		      this.dialogRef.close();
          this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar('Compte supprimé');
          this.router.navigate(["/accueil"]);
        },
        complete: () => { },
        error: (error: any) => { console.log(error) }
      })
    }
    else{
      this.dialogRef.close();
    }
  }
}
