import { Game } from "../game/game.model";
import { PlatformLogo } from "../platform-logo.model";
import { ReleaseDate } from "../release-dates/release-date.model";
import { category } from "./enum/category.enum";

export class Platform {
    id:number;
    abbreviation:string;
    alternative_name:string;
    category:category;
    checksum:string;
    generation:number;
    name:string;
    games:Game[];
    platform_logo:PlatformLogo;
    slug:string;
    summary:string;
    url:string;
    release_dates: ReleaseDate[];
    createdAt: Date;
    updatedAt: Date;
}
