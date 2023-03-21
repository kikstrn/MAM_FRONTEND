import { Component, OnInit } from '@angular/core';
import { plainToInstance } from 'class-transformer';
import { DataGame, Game } from './models/game/game/game.model';
import { DataGameModel } from '../game/game/models/game/data-game.model';
import { GameService } from '../game/game/services/game.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  popularGames = new DataGame();
  recentlyReleased = new DataGame();
  mostAnticipated = new DataGame();
  nextRelease = new DataGame();

  constructor(public gameService: GameService) {}

  ngOnInit(): void {

    this.gameService.popularGames().subscribe({
      next: (dataGame: DataGameModel) => {
        if (dataGame != undefined) this.popularGames = plainToInstance(DataGame, dataGame);
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });

    this.gameService.recentlyReleased().subscribe({
      next: (dataGame: DataGameModel) => {
        if (dataGame != undefined) this.recentlyReleased = plainToInstance(DataGame, dataGame);
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });

    this.gameService.mostAnticipated().subscribe({
      next: (dataGame: DataGameModel) => {
        if (dataGame != undefined) this.mostAnticipated = plainToInstance(DataGame, dataGame);
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });

    this.gameService.nextRelease().subscribe({
      next: (dataGame: DataGameModel) => {
        if (dataGame != undefined) this.nextRelease = plainToInstance(DataGame, dataGame);
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });
  }

  getCover(game: Game): string {
    let t = Object.assign(new Game(), game);
    return t.getUrlCover();
  }

  scrollLeft(i: number) {
    switch (i) {
      case 1:
        let scrollValue1 = document.getElementById('carouselPopularGame')!.scrollLeft - 500;
        document.getElementById('carouselPopularGame')!.scrollTo({
          left: scrollValue1,
          behavior: 'smooth'
        });
        break;
      case 2:
        let scrollValue2 = document.getElementById('carouselMostAnticipated')!.scrollLeft - 500;
        document.getElementById('carouselMostAnticipated')!.scrollTo({
          left: scrollValue2,
          behavior: 'smooth'
        });
        break;
      case 3:
        let scrollValue3 = document.getElementById('carouselRecentlyReleased')!.scrollLeft - 500;
        document.getElementById('carouselRecentlyReleased')!.scrollTo({
          left: scrollValue3,
          behavior: 'smooth'
        });
        break;
      case 4:
        let scrollValue4 = document.getElementById('carouselNextRelease')!.scrollLeft - 500;
        document.getElementById('carouselNextRelease')!.scrollTo({
          left: scrollValue4,
          behavior: 'smooth'
        });
    }
  }
  scrollRight(i: number) {
    switch (i) {
      case 1:
        let scrollValue1 = document.getElementById('carouselPopularGame')!.scrollLeft + 500;
        document.getElementById('carouselPopularGame')!.scrollTo({
          left: scrollValue1,
          behavior: 'smooth'
        });
        break;
      case 2:
        let scrollValue2 = document.getElementById('carouselMostAnticipated')!.scrollLeft + 500;
        document.getElementById('carouselMostAnticipated')!.scrollTo({
          left: scrollValue2,
          behavior: 'smooth'
        });
        break;
      case 3:
        let scrollValue3 = document.getElementById('carouselRecentlyReleased')!.scrollLeft + 500;
        document.getElementById('carouselRecentlyReleased')!.scrollTo({
          left: scrollValue3,
          behavior: 'smooth'
        });
        break;
      case 4:
        let scrollValue4 = document.getElementById('carouselNextRelease')!.scrollLeft + 500;
        document.getElementById('carouselNextRelease')!.scrollTo({
          left: scrollValue4,
          behavior: 'smooth'
        });
    }
  }
}
