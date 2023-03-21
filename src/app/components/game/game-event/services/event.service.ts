import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { environment } from "../../../../../environments/environment.prod";
import { CreateEventModel } from "../models/create-event.model";
import { EventModel } from "../models/event.model";

@Injectable()
export class EventService {

    API_URL = environment.API_URL;

    constructor(private http: HttpClient, public cookieService : CookieService) {}

    getHeader(): { headers: { Authorization: string } } {
        return {headers:{'Authorization': `Bearer ${this.cookieService.get('token_mam')}`}}
    }

    findAll() : Observable<Event[]>{
        return (this.http.get<Event[]>(this.API_URL));
    }

    findByGame(id:string, url:string = '/events/game/') : Observable<EventModel[]>{
        return (this.http.get<EventModel[]>(`${this.API_URL}${url}${id}`));
    }

    findByUser(id:string, url:string = '/events/user/') : Observable<EventModel[]>{
        return (this.http.get<EventModel[]>(`${this.API_URL}${url}${id}`));
    }

    findOne(id: string, url: string = '/events/') : Observable<EventModel> {
        return (this.http.get<EventModel>(`${this.API_URL}${url}${id}`));
    }

    participate(id : string, url: string = '/events/participate/') : Observable<EventModel> {
        return(this.http.get<EventModel>(`${this.API_URL}${url}${id}`, this.getHeader()));
    }

    unParticipate(id : string, url: string = '/events/un-participate/') : Observable<EventModel> {
        return(this.http.get<EventModel>(`${this.API_URL}${url}${id}`, this.getHeader()))
    }

    create(createEvent : CreateEventModel, url : string = '/events/') : Observable<EventModel>{
        return (this.http.post<EventModel>(`${this.API_URL}${url}`, createEvent, { headers: { 'Authorization': `Bearer ${this.cookieService.get('token_mam')}` } } ));
    }

    delete(id : string, url: string = '/events/') : Observable<EventModel> {
        return (this.http.delete<EventModel>(`${this.API_URL}${url}${id}`));
    }

}