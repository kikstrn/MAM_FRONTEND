import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { MaterialModule } from "src/app/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignupRoutingModule } from './signup-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SignupRoutingModule,
    HttpClientModule
  ],
  exports : [
    SignupComponent
  ],
  providers:[
    UserService
  ]
})
export class SignupModule { }
