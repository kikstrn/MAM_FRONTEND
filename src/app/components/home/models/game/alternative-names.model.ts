import { Game } from "./game/game.model";

export class AlternativeName {
    id:number;
    checksum:string;
    comment:string;
    name:string;
    game:Game;
    createdAt: Date;
    updatedAt: Date;
}
