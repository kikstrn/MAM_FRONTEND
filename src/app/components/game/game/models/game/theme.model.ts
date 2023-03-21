import { GameModel } from "./game.model";

export class ThemeModel {
    id:number;
    name:string;
    slug:string;
    url:string;
    games:GameModel[];
    createdAt: Date;
    updatedAt: Date;
}