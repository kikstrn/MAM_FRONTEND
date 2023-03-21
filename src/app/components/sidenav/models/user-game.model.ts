import { UserGameCoverModel } from "./user-game-cover.model";

export class UserGameModel {
    _id: string;
    name: string;
    cover: UserGameCoverModel;
}