import { GameModel } from "../game.model";
import { PlatformLogoModel } from "../platform-logo.model";
import { ReleaseDateModel } from "../release-dates/release-date.model";
import { category } from "./enum/category.enum";

export class PlatformModel {
    id:number;
    abbreviation:string;
    alternative_name:string;
    category:category;
    checksum:string;
    generation:number;
    name:string;
    games:GameModel[];
    platform_logo:PlatformLogoModel;
    slug:string;
    summary:string;
    url:string;
    release_dates: ReleaseDateModel[];
    createdAt: Date;
    updatedAt: Date;
}
