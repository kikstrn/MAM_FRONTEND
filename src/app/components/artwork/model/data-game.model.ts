class ArtworkGameModel {
    _id:string;
    name: string;
    artworks:ArtworkModel[];
}

class ArtworkModel {
    image_id: string;
}

export class DataGameModel {
    data:ArtworkGameModel[]
    next_route:string;   
}