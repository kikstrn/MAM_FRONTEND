import { GameModel } from "./game/game.model";
import { UserModel } from "./user/user";

export class ReviewModel {
    _id:number;
    title:string;
    review:string;
    good_point:string;
    bad_point:string;
    rating:number;
    ratingComment:number;
    author:UserModel;
    game:GameModel;
    createdAt: Date;
    updatedAt: Date;
}