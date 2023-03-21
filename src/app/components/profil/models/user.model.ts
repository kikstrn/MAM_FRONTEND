import { Game } from "./game/game/game.model";

export class UserModel {
    _id:string;
    username : string;
    password: string;
    avatar : string;
    isAdmin: boolean;
    isActive: boolean;
    games:Game[];
    friends:UserModel[];
}