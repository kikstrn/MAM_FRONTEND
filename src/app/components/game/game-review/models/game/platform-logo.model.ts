import { PlatformModel } from "./platforms/platform.model";


export class PlatformLogoModel {
    id:number;
    alpha_channel:boolean;
    animated:boolean;
    checksum:string;
    height:number;
    width:number;
    image_id:string;
    url:string;
    platform:PlatformModel;
    createdAt: Date;
    updatedAt: Date;
}
