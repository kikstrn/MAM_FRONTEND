import { GameModel } from "./game.model";

export class AlternativeNameModel {
    id:number;
    checksum:string;
    comment:string;
    name:string;
    game:GameModel;
    createdAt: Date;
    updatedAt: Date;
}
