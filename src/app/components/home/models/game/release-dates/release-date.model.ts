import { Game } from "../game/game.model";
import { Platform } from "../platforms/platform.model";
import { category } from "./enum/category.enum";
import { region } from "./enum/region.enum";

export class ReleaseDate {
    id:number;
    category:category;
    checksum:string;
    date:Date;
    human:string;
    m:number;
    platform: Platform;
    region:region;
    y:number;
    games:Game[];
    createdAt: Date;
    updatedAt: Date;
}
