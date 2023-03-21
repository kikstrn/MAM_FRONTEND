import { UserFriendModel } from "./user-friend.model";
import { UserGameModel } from "./user-game.model";

export class UserModel{
    _id:string;
    username : string;
    password: string;
    avatar : string;
    isActive : boolean;
    isAdmin : boolean;
    games:UserGameModel[];
    friends:UserFriendModel[];
}