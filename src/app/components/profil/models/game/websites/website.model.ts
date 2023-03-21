import { Game } from "../game/game.model";
import { category } from "./enum/category.enum";

export class Website {
    id:number;
    category:category;
    checksum:string;
    trusted:boolean;
    url:string;
    game:Game;
    createdAt: Date;
    updatedAt: Date;
}