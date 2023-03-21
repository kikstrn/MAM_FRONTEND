import { Game } from "./game/game.model";

export class GameMode {
    id:number;
    checksum:string;
    name:string;
    slug:string;
    url:string;
    games:Game[];
    createdAt: Date;
    updatedAt: Date;
}
