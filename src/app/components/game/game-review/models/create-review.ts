import { GameModel } from "../../game/models/game/game.model";
import { UserModel } from "../../game/models/user/user";

export class CreateReviewModel {
    title:string;
    review:string;
    good_point:string;
    bad_point:string;
    rating:number;
    author:UserModel;
    game:GameModel;
}
