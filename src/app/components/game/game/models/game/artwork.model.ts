import { GameModel } from "./game.model";

export class DataArtwork{
    data:ArtworkModel[]
    next_route:string;
}

export class ArtworkModel {
    id:number;
    alpha_channel:boolean;
    animated:boolean;
    checksum:string;
    height:number;
    width:number;
    image_id:string;
    url:string;
    game:GameModel;
    createdAt: Date;
    updatedAt: Date;
}