import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { AppRoutingModule } from "src/app/app-routing.module";
import { MaterialModule } from "src/app/material.module";
import { SessionService } from "../../core/services/session.service";
import { SidenavComponent } from "./sidenav.component";

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports : [
    SidenavComponent
  ],
  providers: [CookieService, SessionService]
})
export class SidenavModule { }
