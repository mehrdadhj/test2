import { CorpService } from "../services/corp.service";

export class CorpsPage {
    data: string[];

    constructor(private corpService: CorpService) {
<<<<<<< HEAD
        this.data = corpService.GetData();
=======
        this.data = corpService.CallApi();
>>>>>>> 0ff431b70bdc47838a6f37c6348a51fe62a26bf5
    }
}