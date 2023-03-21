import { GameModel } from "./game.model";

export class GameModeModel {
    id:number;
    checksum:string;
    name:string;
    slug:string;
    url:string;
    games:GameModel[];
    createdAt: Date;
    updatedAt: Date;
}
