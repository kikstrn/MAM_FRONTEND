import { CardGameCoverModel } from "./card-game-cover.model";

export class CardGameModel {
  _id: string;
  name: string;
  cover: CardGameCoverModel;
}