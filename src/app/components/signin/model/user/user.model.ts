import { UserFriendModel } from "./user-friend.model";
import { UserGameModel } from "./user-game.model";

export class UserModel{
    _id:string;
    username : string;
    password: string;
    avatar : string;
    isAdmin: boolean;
    isActive: boolean;
    games:UserGameModel[];
    friends:UserFriendModel[];
}