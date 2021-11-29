import { CorpService } from "../services/corp.service";

export class CorpsPage {
    data: string[];

    constructor(private corpService: CorpService) {
        this.data = corpService.GetData();
    }
}