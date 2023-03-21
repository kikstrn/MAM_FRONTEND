import { Expose, Type } from "class-transformer";
import { EventUserModel } from "./event-player.model";
@Expose()
export class EventModel {
    _id: string;

    title: string;

    description: string;

    max_nb_player: number;

    @Type(() => Date)
    start_event: Date;

    @Type(() => Date)
    end_event: Date;

    @Type(() => EventUserModel)
    master: EventUserModel;

    @Type(() => EventUserModel)
    players: EventUserModel[];
}