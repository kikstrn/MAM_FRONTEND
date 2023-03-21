import { Game } from "../game/game/game.model";
import { UserModel } from "../user.model";

export class CreateReview {
    title:string;
    review:string;
    good_point:string;
    bad_point:string;
    rating:number;
    author:UserModel;
    game:Game;
}
