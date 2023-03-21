import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GenericMessageSnackBarComponent } from '../shared/SnackBars/GenericMessageSnackBarComponent';
import { UserModel } from './model/user.model';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formGroup = this.formBuilder.group({
    'pseudo': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    'password': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
  });
  post: any = '';
  
  constructor(private formBuilder: FormBuilder, public userService : UserService, private router: Router, public snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(post: any) {
    let user: UserModel;
    if (this.formGroup.get("pseudo") != null && this.formGroup.get("password") != null){
      user = new UserModel(this.formGroup.get("pseudo")?.value, this.formGroup.get("password")?.value)
      this.userService.create(user).subscribe({
        next: (user : any) =>  {
          if(user){
            this.snackbar.openFromComponent( GenericMessageSnackBarComponent).instance.openSnackBar(
              'Votre compte a bien été créé '+ user.username+'. Connectez-vous !'
            );
            this.router.navigate(['/connexion']);
          }
        },
        complete: () => {},
        error: (error) => { console.log(error) }
      }); 
    }else{
      this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar('Veuillez renseigner tous les champs');
    }
  }
}

