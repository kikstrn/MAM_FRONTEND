import { GameModel } from "../game.model";
import { category } from "./enum/category.enum";
import { rating } from "./enum/rating.enum";

export class AgeRatingModel {
    id:number;
    category:category;
    checksum:string;
    rating:rating;
    rating_cover_url:string;
    synopsis:string;
    games:GameModel[];
    createdAt: Date;
    updatedAt: Date;
}