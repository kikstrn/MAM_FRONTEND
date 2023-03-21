import { UserFriendModel } from "./user-friend.model";
import { UserGameModel } from "./user-game.model";

export class UserModel{
    _id:string;
    username : string;
    password: string;
    avatar : string;
    games:UserGameModel[];
    friends:UserFriendModel[];
}




