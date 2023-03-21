import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../../environments/environment.prod";
import { DataGameModel } from "../models/game/data-game.model";
import { GameModel } from "../models/game/game.model";

@Injectable()
export class GameService {
    API_URL = environment.API_URL;

    constructor(private http: HttpClient) {}

    findAll(url: string = '/games/'): Observable<DataGameModel>{
        return (this.http.get<DataGameModel>(`${this.API_URL}${url}`));
    }
    findById(id: string, url: string = '/games/info/'): Observable<GameModel>{
        return this.http.get<GameModel>(`${this.API_URL}${url}${id}`);
    }
    popularGames(url: string = '/games/popular-games?limit=28'): Observable<DataGameModel>{
        return this.http.get<DataGameModel>(`${this.API_URL}${url}`);
    }
    nextRelease(url: string = '/games/next-release?limit=20'): Observable<DataGameModel>{
        return this.http.get<DataGameModel>(`${this.API_URL}${url}`);
    }
    recentlyReleased(url: string = '/games/recently-released?limit=20'): Observable<DataGameModel>{
        return this.http.get<DataGameModel>(`${this.API_URL}${url}`);
    }
    mostAnticipated(url: string = '/games/most-anticipated?limit=20'): Observable<DataGameModel>{
        return this.http.get<DataGameModel>(`${this.API_URL}${url}`);
    }
    searchGames(game : string,url: string = '/games/search?game='): Observable<DataGameModel>{
        return this.http.get<DataGameModel>(`${this.API_URL}${url}${game}`);
    }
}