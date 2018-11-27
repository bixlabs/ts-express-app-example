import {ISurvey, ISurveyInput} from "../../entity/survey/models";
import {ISurveyRepository} from "../../entity/survey/repository";

export class UpdateSurvey {
    constructor(private repo: ISurveyRepository) {
    }

    public async execute(id: number, survey: ISurveyInput): Promise<ISurvey> {
        return this.repo.update(id, survey);
    }
}
