import { Passenger } from "./passenger";

export class BookingDetail {

    constructor(public source:string, public destination:string, passengers:Array<Passenger>) {

    }


}