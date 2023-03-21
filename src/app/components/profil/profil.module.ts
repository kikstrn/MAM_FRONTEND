import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { MaterialModule } from "src/app/material.module";
import { CardGameModule } from "../card/card-game/card-game.module";
import { ProfilRoutingModule } from "./profil-routing.module";
import { ProfilComponent } from "./profil.component";
import { ProfilService } from "./services/profil.service";
import { DeleteComponent } from './dialog/delete/delete.component';

@NgModule({
  declarations: [
    ProfilComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ProfilRoutingModule,
    ReactiveFormsModule,
    CardGameModule,
  ],
  exports : [
    ProfilComponent
  ],
  providers: [CookieService, ProfilService]
})
export class ProfilModule { }
