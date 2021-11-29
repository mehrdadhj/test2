export class CorpService {
    private data: string[];
    CallApi(): string[] {
        //call api
        this.data = [];
        return this.data;
    }

    GetData(): string[] {
        return this.data;
    }

}