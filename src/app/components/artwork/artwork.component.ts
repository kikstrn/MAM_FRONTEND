import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DetailImageComponent } from './dialog/detail-image.component';
import { ArtworkModel } from './model/artwork.model';
import { DataGameModel } from './model/data-game.model';
import { ArtworkService } from './service/artwork.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})

export class ArtworkComponent implements OnInit {

  artworks: ArtworkModel[] = [];
  offset = 0;
  limit = 20;
  next_route = `/games/artworks?offset=${this.offset}&limit=${this.limit}`

  constructor(public artworkService: ArtworkService, private router: Router, public dialog: MatDialog) {}

  @HostListener("window:scroll", [])
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2) {
      this.loadOtherArtwork();
    }
  }

  ngOnInit(): void {
    this.loadOtherArtwork();
  };

  loadOtherArtwork(): void {
    this.artworkService.countGameWithArtwork().subscribe({
      next: (nbGames: number) => {
        this.offset = Math.floor(Math.random() * nbGames - this.limit);
        this.next_route = `/games/artworks?offset=${this.offset}&limit=${this.limit}`;

        this.artworkService.findGamesGameWithArtwork(this.next_route).subscribe({
          next: (dataGame: DataGameModel) => {
            for(let i = 0; i < dataGame.data.length; i++){
              this.artworks.push({ idGame:dataGame.data[i]._id ,title: dataGame.data[i].name, url: "https://images.igdb.com/igdb/image/upload/t_screenshot_med/" + dataGame.data[i].artworks[Math.floor(Math.random() * dataGame.data[i].artworks.length)].image_id + ".png" });
            }
            this.next_route = dataGame.next_route
          },
          complete: () => { },
          error: (error) => { console.log(error) }
        });
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });
  }

  redirectGame(idGame: string): void {
    this.router.navigateByUrl('/jeu/' + idGame + '');
  }
  
  openDialog(artwork: ArtworkModel): void {
    let dialogDescription = this.dialog.open(DetailImageComponent)
    artwork.url = artwork.url .replace('t_screenshot_med', 't_1080p');
    dialogDescription.componentInstance.url = artwork.url;    
    dialogDescription.componentInstance.title = artwork.title;
  }
}
