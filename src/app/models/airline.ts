export class SearchResultEntity {

    constructor(
        public id: number,
        public name: string,
        public contactNumber: string,
        public blocked: boolean) { }
}