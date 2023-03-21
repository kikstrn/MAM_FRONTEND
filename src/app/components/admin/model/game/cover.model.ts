import { Game } from "./game/game.model";

export class Cover {
    id:number;
    alpha_channel: boolean;
    animated:boolean;
    checksum:string;
    height:number;
    width:number;
    image_id:string;
    url:string;
    game:Game;
    createdAt: Date;
    updatedAt: Date;
}