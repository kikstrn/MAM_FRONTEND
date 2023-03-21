import { AgeRatingModel } from "./age-rating/age-ratings.model";
import { AlternativeNameModel } from "./alternative-names.model";
import { ArtworkModel } from "./artwork.model";
import { CoverModel } from "./cover.model";
import { GameModeModel } from "./game-modes.model";
import { GenreModel } from "./genres.model";
import { PlatformModel } from "./platforms/platform.model";
import { ReleaseDateModel } from "./release-dates/release-date.model";
import { ScreenshotModel } from "./screenshots.model";
import { status } from './enum/status.enum'
import { ThemeModel } from "./theme.model";
import { GameVideoModel } from "./game-videos.model";
import { WebsiteModel } from "./websites/website.model";
import { UserModel } from "../user/user";
import { ReviewModel } from "../../../../profil/models/review.model";

export class GameModel {
    _id:string;
    cover:CoverModel;
    age_ratings:AgeRatingModel[];
    aggregated_rating:number;
    aggregated_rating_count:number;
    alternative_names:AlternativeNameModel[];
    artworks:ArtworkModel[] = [];
    checksum:string;
    first_release_date:Date;
    follows:number;  
    game_modes:GameModeModel[];
    genres:GenreModel[];
    hypes:number;
    name:string;
    platforms:PlatformModel[];
    rating:number;
    rating_count:number;
    release_dates:ReleaseDateModel[];
    screenshots:ScreenshotModel[] = [];
    slug:string;
    status:status;
    storyline:string;
    summary:string;
    summary_trad_fr:string;
    themes:ThemeModel[];
    total_rating:number;
    total_rating_count:number;
    url:string;
    version_title:string;
    videos:GameVideoModel[];
    websites:WebsiteModel[];
    users:UserModel[];
    reviews:ReviewModel[];
    events:Event[];
    createdAt: Date;
    updatedAt: Date;

    public getUrlCover():string{
        return (this.cover && this.cover.url != '') ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${this.cover.image_id}.png` : '';
    }

    public getUrlArtwork():string{
        return (this.artworks != undefined) ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${this.artworks[0].image_id}.png` : '';
    }
}