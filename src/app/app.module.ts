import 'reflect-metadata';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module'

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericActionSuccessSnackBarComponent } from './components/shared/SnackBars/GenericActionSuccessSnackBarComponent';
import { GenericActionErrorSnackBarComponent } from './components/shared/SnackBars/GenericActionErrorSnackBarComponent';
import { GenericMessageSnackBarComponent } from './components/shared/SnackBars/GenericMessageSnackBarComponent';
import { HomeModule } from './components/home/home.module';
import { ArtworkModule } from './components/artwork/artwork.module';
import { GameLibraryModule } from './components/game/game-library/game-library.module';
import { GameEventModule } from './components/game/game-event/game-event.module';
import { FooterModule } from './components/footer/footer.module';
import { PageNotFoundModule } from './components/page-not-found/page-not-found.module';
import { ProfilModule } from './components/profil/profil.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { DatePipe } from '@angular/common';
import { CardEventModule } from './components/card/card-event/card-event.module';
import { SigninModule } from './components/signin/signin.module';
import { SignupModule } from './components/signup/signup.module';
import { FriendModule } from './components/friend/friend.module';
import { CardFriendModule } from './components/card/card-friend/card-friend.module';
import { CardGameModule } from './components/card/card-game/card-game.module';
import { CardReviewModule } from './components/card/card-review/card-review.module';
import { CardLargeModule } from './components/card/card-large/card-large.module';
import { GameReviewModule } from './components/game/game-review/game-review.module';
import { GameModule } from './components/game/game/game.module';
import { NewEventModule } from './components/game/game-event/dialog/new-event.module';
import { NewReviewModule } from './components/game/game-review/dialog/new-review.module';
import { AdminModule } from './components/admin/admin.module';
import { CardUserAdminModule } from './components/card/card-user-admin/card-user-module';
import { DetailImageModule } from './components/artwork/dialog/detail-image-module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    ArtworkModule,
    CardGameModule,
    GameLibraryModule,
    GameEventModule,
    GameModule,
    GameReviewModule,
    FooterModule,
    PageNotFoundModule,
    ProfilModule,
    SidenavModule,
    CardReviewModule,
    CardEventModule,
    CardLargeModule,
    SigninModule,
    SignupModule,
    FriendModule,
    CardFriendModule,
    NewEventModule,
    NewReviewModule,
    AdminModule,
    CardUserAdminModule,
    DetailImageModule,
  ],
  providers: [GenericActionSuccessSnackBarComponent, GenericActionErrorSnackBarComponent, GenericMessageSnackBarComponent, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
