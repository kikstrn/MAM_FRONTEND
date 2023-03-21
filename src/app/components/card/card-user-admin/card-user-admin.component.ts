import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GenericMessageSnackBarComponent } from '../../shared/SnackBars/GenericMessageSnackBarComponent';
import { CardUserModel } from './model/card-user.model';
import { UserModel } from './model/user.model';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-card-user-admin',
  templateUrl: './card-user-admin.component.html',
  styleUrls: ['./card-user-admin.component.css']
})
export class CardUserAdminComponent implements OnInit {

  @Input()
  user: CardUserModel;
  isAdmin = false;
  isActive = false;
  constructor(private router: Router, private readonly userService : UserService, private snackbar: MatSnackBar) { 
  }

  ngOnInit(): void {
    this.isAdmin = this.user.isAdmin;
    this.isActive = this.user.isActive;
  }

  onClick(_id: string) {
    this.router.navigateByUrl('/profil/' + _id + '');
  }

  disableOrEnable(disable: boolean, _id: string){
    this.userService.disableOrEnableAccount(disable, _id).subscribe({
      next: (users: UserModel) => {
        this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar('Mise à jour effectuée');
        this.isActive = !this.isActive;
      },
      complete: () => { },
      error: (error: any) => { console.log(error) }
    });
  }
  
  setAdminOrRemove(actif: boolean, _id:string){
    this.userService.findById(_id).subscribe({
      next: (user: UserModel) => {
        user.isAdmin = actif
        this.userService.update(user).subscribe({
          next: () => {
            this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar('Mise à jour effectuée');
            this.isAdmin = !this.isAdmin;
          },
          complete: () => { },
          error: (error: any) => { console.log(error) }
        })
      },
      complete: () => { },
      error: (error: any) => { console.log(error) }
    });
  }

  deleteAccount(_id: string){
    this.userService.deleteById(_id).subscribe({
      next: (user: UserModel) => {
        this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar('Compte supprimé');
        var card = document.getElementById(_id) as HTMLElement;
          card.style.display = "none";
      },
      complete: () => { },
      error: (error: any) => { console.log(error) }
    })
  }
    
}
