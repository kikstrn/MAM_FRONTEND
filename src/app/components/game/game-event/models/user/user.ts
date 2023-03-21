import { GameModel } from "../game/game.model";


export class UserModel {
    _id:string;
    username : string;
    password: string;
    avatar : string;
    games:GameModel[];
    friends:UserModel[];
}