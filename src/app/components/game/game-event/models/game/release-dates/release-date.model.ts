import { GameModel } from "../game.model";
import { PlatformModel } from "../platforms/platform.model";
import { category } from "./enum/category.enum";
import { region } from "./enum/region.enum";

export class ReleaseDateModel {
    id:number;
    category:category;
    checksum:string;
    date:Date;
    human:string;
    m:number;
    platform: PlatformModel;
    region:region;
    y:number;
    games:GameModel[];
    createdAt: Date;
    updatedAt: Date;
}
