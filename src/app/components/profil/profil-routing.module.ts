import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SessionService } from '../../core/services/session.service';
import { ProfilComponent } from './profil.component';

const routes: Routes = [
  { path: '', component: ProfilComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CookieService, SessionService]
})
export class ProfilRoutingModule { }