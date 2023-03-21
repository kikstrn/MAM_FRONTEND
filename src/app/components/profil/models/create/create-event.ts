import { GameModel } from "src/app/components/game/game/models/game/game.model";
import { UserModel } from "../user.model";

export class CreateEvent {
    title: string;
    description: string;
    max_nb_player: number;
    start_event: Date;
    end_event: Date;
    master: UserModel;
    game: GameModel;
}