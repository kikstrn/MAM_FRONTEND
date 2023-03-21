import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  // Redirection en fonction du composant
  { path: 'accueil', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'profil', loadChildren: () => import('./components/profil/profil.module').then(m => m.ProfilModule) },
  { path: 'connexion', loadChildren: () => import('./components/signin/signin.module').then(m => m.SigninModule) },
  { path: 'inscription', loadChildren: () => import('./components/signup/signup.module').then(m => m.SignupModule) },
  { path: 'jeu', loadChildren: () => import('./components/game/game-library/game-library.module').then(m => m.GameLibraryModule) },
  { path: 'artwork', loadChildren: () => import('./components/artwork/artwork.module').then(m => m.ArtworkModule) },
  { path: 'amis', loadChildren: () => import('./components/friend/friend.module').then(m => m.FriendModule) },
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  { path: 'jeu/:id', loadChildren: () => import('./components/game/game/game.module').then(m => m.GameModule) },
  { path: 'profil/:id', loadChildren: () => import('./components/profil/profil.module').then(m => m.ProfilModule) },
  // Redirection de base
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  // Redirecton 404
  { path: '**', component: PageNotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


