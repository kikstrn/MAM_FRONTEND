import { CardReviewUserModel } from "./card-review-user.model";

export class CardReviewModel {
    _id: string
    title: string;
    review: string;
    good_point: string;
    bad_point: string;
    rating: number;
    author: CardReviewUserModel;
}