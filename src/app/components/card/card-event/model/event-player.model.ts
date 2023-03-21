import { Expose } from "class-transformer";

@Expose()
export class EventUserModel {
    _id:string;
    username : string;
    avatar : string;
}