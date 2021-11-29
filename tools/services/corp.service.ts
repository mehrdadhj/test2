export class CorpService {
    private data: string[];
<<<<<<< HEAD

    constructor() {
        this.data = this.callApi();
    }

    private callApi(): string[] {
        this.data = [];
        //call api
        return this.data;
    }

    public GetData(): string[] {
=======
    CallApi(): string[] {
        //call api
        this.data = [];
        return this.data;
    }

    GetData(): string[] {
>>>>>>> 0ff431b70bdc47838a6f37c6348a51fe62a26bf5
        return this.data;
    }

}