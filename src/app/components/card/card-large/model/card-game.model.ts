import { CardGameCover } from "./card-game-cover.model";
import { CardGameScreenshot } from "./card-game-screenshot.model";

export class CardGameModel {
    _id:string;
    name: string
    cover:CardGameCover;
    first_release_date:Date;
    screenshots:CardGameScreenshot[];
}