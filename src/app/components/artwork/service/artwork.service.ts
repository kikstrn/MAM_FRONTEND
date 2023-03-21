import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment.prod";
import { DataGameModel } from "../model/data-game.model";

@Injectable()
export class ArtworkService {
    API_URL = environment.API_URL;

    constructor(private http: HttpClient) {}

    findGamesGameWithArtwork(url: string = '/games/artworks?limit=20'): Observable<DataGameModel>{
        return this.http.get<DataGameModel>(`${this.API_URL}${url}`);
    }

    countGameWithArtwork(url: string = '/games/artworks/count'): Observable<number>{
        return this.http.get<number>(`${this.API_URL}${url}`);
    }
}