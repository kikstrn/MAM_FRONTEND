import { GameModel } from "../../game/models/game/game.model";
import { UserModel } from "../../game/models/user/user";

export class ReviewModel {
    _id:string;
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