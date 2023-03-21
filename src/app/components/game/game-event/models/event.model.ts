import { GameModel } from "../../game/models/game/game.model";
import { UserModel } from "../../game/models/user/user";

export class EventModel {
    _id: string;
    title: string;
    description: string;
    max_nb_player: number;
    start_event: Date;
    end_event: Date;
    master: UserModel;
    players: UserModel[];
    game: GameModel;
    createdAt: Date;
    updatedAt: Date;
}