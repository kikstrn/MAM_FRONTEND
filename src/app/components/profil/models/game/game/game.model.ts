import { AgeRating } from "../age-rating/age-ratings.model";
import { AlternativeName } from "../alternative-names.model";
import { Artwork } from "../artwork.model";
import { Cover } from "../cover.model";
import { GameMode } from "../game-modes.model";
import { Genre } from "../genres.model";
import { Platform } from "../platforms/platform.model";
import { ReleaseDate } from "../release-dates/release-date.model";
import { Screenshot } from "../screenshots.model";
import { status } from "./enum/status.enum";
import { Theme } from "../theme.model";
import { GameVideo } from "../game-videos.model";
import { Website } from "../websites/website.model";
import { ReviewModel } from "../../review.model";
import { EventModel } from "../../event.model";

export class DataGame{
    data:Game[]
    next_route:string;
}

export class Game {
    _id:string;
    cover:Cover;
    age_ratings:AgeRating[];
    aggregated_rating:number;
    aggregated_rating_count:number;
    alternative_names:AlternativeName[];
    artworks:Artwork[];
    checksum:string;
    first_release_date:Date;
    follows:number;  
    game_modes:GameMode[];
    genres:Genre[];
    hypes:number;
    name:string;
    platforms:Platform[];
    rating:number;
    rating_count:number;
    release_dates:ReleaseDate[];
    screenshots:Screenshot[];
    slug:string;
    status:status;
    storyline:string;
    summary:string;
    summary_trad_fr:string;
    themes:Theme[];
    total_rating:number;
    total_rating_count:number;
    url:string;
    version_title:string;
    videos:GameVideo[];
    websites:Website[];
    reviews:ReviewModel[];
    events:EventModel[];
    createdAt: Date;
    updatedAt: Date;

    public getUrlCover():string{
        return (this.cover && this.cover.url != '') ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${this.cover.image_id}.png` : '';
    }

    public getUrlArtwork():string{
        return (this.artworks != undefined) ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${this.artworks[0].image_id}.png` : '';
    }
}