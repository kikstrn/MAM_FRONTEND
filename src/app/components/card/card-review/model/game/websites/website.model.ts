import { GameModel } from "../game.model";
import { category } from "./enum/category.enum";

export class WebsiteModel {
    id:number;
    category:category;
    checksum:string;
    trusted:boolean;
    url:string;
    game:GameModel;
    createdAt: Date;
    updatedAt: Date;
}