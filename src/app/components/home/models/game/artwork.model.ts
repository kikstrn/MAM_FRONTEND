import { Game } from "./game/game.model";

export class DataArtwork{
    data:Artwork[]
    next_route:string;
}

export class Artwork {
    id:number;
    alpha_channel:boolean;
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