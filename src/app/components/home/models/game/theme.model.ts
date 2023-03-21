import { Game } from "./game/game.model";

export class Theme {
    id:number;
    name:string;
    slug:string;
    url:string;
    games:Game[];
    createdAt: Date;
    updatedAt: Date;
}