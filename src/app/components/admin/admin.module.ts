import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { UserService } from "./service/user.service";
import { CardUserAdminModule } from "../card/card-user-admin/card-user-module";

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    HttpClientModule,
    CardUserAdminModule,
  ],
  exports : [
    AdminComponent
  ],
  providers: [
    UserService
  ]
})
export class AdminModule { }
