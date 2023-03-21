import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { MaterialModule } from "src/app/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SigninRoutingModule } from './signin-routing.module';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth/auth.service';
import { UserService } from './service/user/user.service';
import { SessionService } from '../../core/services/session.service';


@NgModule({
  declarations: [
    SigninComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SigninRoutingModule,
    HttpClientModule
  ],
  exports : [
    SigninComponent
  ],
  providers: [
    CookieService,
    AuthService,
    UserService,
    SessionService
  ]
})
export class SigninModule { }
