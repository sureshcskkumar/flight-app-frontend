import { Passenger } from "./passenger";

export class BookingDetail {

    constructor(public source:string|undefined, public destination:string|undefined, passengers:Array<Passenger>) {

    }


}