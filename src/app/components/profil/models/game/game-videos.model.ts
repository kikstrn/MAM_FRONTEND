import { Game } from "./game/game.model";

export class GameVideo {
    id:number;
    checksum:string;
    name:string;
    video_id:string;
    game:Game;
    createdAt: Date;
    updatedAt: Date;
}
