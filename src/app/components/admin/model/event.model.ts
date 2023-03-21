import { Game } from "./game/game/game.model";
import { UserModel } from "./user.model";

export class EventModel {
    _id: number;
    title: string;
    description: string;
    max_nb_player: number;
    start_event: Date;
    end_event: Date;
    master: UserModel;
    players: UserModel[];
    game: Game;
    createdAt: Date;
    updatedAt: Date;
}