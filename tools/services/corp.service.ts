export class CorpService {
    private data: string[];

    constructor() {
        this.data = this.callApi();
    }

    private callApi(): string[] {
        this.data = [];
        //call api
        return this.data;
    }

    public GetData(): string[] {
        return this.data;
    }

}