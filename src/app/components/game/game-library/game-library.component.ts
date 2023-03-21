import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd, Params } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { Subscription } from 'rxjs';
import { DataGameModel } from '../game/models/game/data-game.model';
import { GameModel } from '../game/models/game/game.model';
import { GameService } from '../game/services/game.service';

@Component({
  selector: 'app-game-library',
  templateUrl: './game-library.component.html',
  styleUrls: ['./game-library.component.css'],
})
export class GameLibraryComponent implements OnInit {
  
  moreGames: Subscription;
  games: GameModel[] = []
  dataGame: DataGameModel;

  constructor(public gameService: GameService, private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe({
      next: (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.route.queryParams.subscribe({
            next: (params: Params) => {
              if (params["search"] != undefined) {
                this.searchGame(params["search"])
              }
              else {
                this.gameService.popularGames().subscribe({
                  next: (dataGame: DataGameModel) => {
                    if(dataGame != undefined) this.dataGame = plainToClass(DataGameModel, dataGame);
                    this.games = dataGame.data;
                  },
                  complete: () => { },
                  error: (error) => { console.log(error) }
                });
              }
            },
            complete: () => { },
            error: (error) => { console.log(error) }
          });
        }
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });
  }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
      this.loadMore()
    }
  }

  loadMore(): void {
    if(this.dataGame != undefined){
      this.gameService.popularGames(this.dataGame.next_route).subscribe({
        next: (dataGame: DataGameModel) => {
          if(dataGame != undefined) this.dataGame = plainToClass(DataGameModel, dataGame);
          dataGame.data.forEach(game => {
            this.games.push(game);
          });
        },
        complete: () => { },
        error: (error) => { console.log(error) }
      });
    }
  }

  searchGame(search: string) {
    this.games = [];
    if (search == undefined) {
      this.ngOnInit()
    }
    else {
      this.gameService.searchGames(search).subscribe({
        next: (dataGame: DataGameModel) => {
          if(dataGame != undefined) this.dataGame = plainToClass(DataGameModel, dataGame);
          dataGame.data.forEach(game => {
            this.games.push(game);
          });
        },
        complete: () => { },
        error: (error) => { console.log(error) }
      });
    }
  }
}
