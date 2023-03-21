import { Game } from "../game/game.model";
import { category } from "./category.enum";
import { rating } from "./rating.enum";

export class AgeRating {
    id:number;
    category:category;
    checksum:string;
    rating:rating;
    rating_cover_url:string;
    synopsis:string;
    games:Game[];
    createdAt: Date;
    updatedAt: Date;
}