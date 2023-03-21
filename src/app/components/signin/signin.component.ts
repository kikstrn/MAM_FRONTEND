import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GenericMessageSnackBarComponent } from '../shared/SnackBars/GenericMessageSnackBarComponent';
import { Location } from '@angular/common';
import jwt_decode from 'jwt-decode';
import { AuthService } from './service/auth/auth.service';
import { AuthModel } from './model/auth/auth.model';
import { AuthResponseModel } from './model/auth/auth-response.model';
import { TokenPayload } from './model/auth/token-payload';
import { plainToClass } from 'class-transformer';
import { UserModel } from './model/user/user.model';
import { UserService } from './service/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from '../../core/services/session.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  formGroup = this.formBuilder.group({
    'username': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    'password': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
  });
  previousUrl: string;
  currentUrl: string;

  constructor(
    private cookieService: CookieService, 
    private readonly sessionService: SessionService,
    private formBuilder: FormBuilder, 
    public authService: AuthService, 
    private router: Router, 
    public snackbar: MatSnackBar, 
    public userService: UserService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  connect() {
    const username = this.formGroup.get('username');
    const password = this.formGroup.get('password');
    if(username != null && password != null){
      const auth = new AuthModel(username.value, password.value);

      this.authService.login(auth).subscribe({
        next: (authResponseModel: AuthResponseModel) => {
          this.cookieService.delete('token_mam');
          this.cookieService.set("token_mam", authResponseModel.access_token, new Date(Date.now() + 3600000));
          const tokenPayload = jwt_decode(authResponseModel.access_token) as TokenPayload;
          this.userService.findById(tokenPayload._id).subscribe({
            next: (user: UserModel) => {              
              const userModel = plainToClass(UserModel, user);              
              this.sessionService.setSession(userModel);
              this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar(
                'Bienvenue sur MeetAMate ' + user.username
              );
              if(localStorage.getItem('lastUrl')){
                localStorage.getItem('lastUrl') == "/inscription" || "/connexion" ? this.router.navigate(["/accueil"]) : this.router.navigate([localStorage.getItem('lastUrl')]);
              }
              else{
                this.router.navigate(["/accueil"]);
              }              
            },
            complete: () => {},
            error: (error) => { console.log(error) }
          });
        },
        complete: () => { },
        error: (error) => { this.snackbar.openFromComponent(GenericMessageSnackBarComponent).instance.openSnackBar('Identifiants Invalides'); }
      });
    }
  }
}