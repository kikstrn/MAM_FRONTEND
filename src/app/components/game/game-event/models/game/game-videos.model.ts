import { GameModel } from "./game.model";

export class GameVideoModel {
    id:number;
    checksum:string;
    name:string;
    video_id:string;
    game:GameModel;
    createdAt: Date;
    updatedAt: Date;
}
