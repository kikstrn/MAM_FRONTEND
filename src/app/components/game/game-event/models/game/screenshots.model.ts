import { GameModel } from "./game.model";

export class ScreenshotModel {
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
