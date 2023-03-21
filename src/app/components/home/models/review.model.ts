import { Game } from "./game/game/game.model";
import { UserModel } from "./user.model";

export class ReviewModel {
    _id:number;
    title:string;
    review:string;
    good_point:string;
    bad_point:string;
    rating:number;
    ratingComment:number;
    author:UserModel;
    game:Game;
    createdAt: Date;
    updatedAt: Date;
}
