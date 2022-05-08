import { Airline } from "./airline";

export class schedule {

    constructor(
        public id:number,
        public airline:Airline,
        public source:string,
        public destination:string,
        public flightDate:Date,
        public startTime:string,
        public numberOfSeats:number,
        public numberOfVacantSeats:number,
        public ticketCost:number) {
    }
}