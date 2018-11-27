import {ISurvey, ISurveyInput} from "../../entity/survey/models";
import {ISurveyRepository} from "../../entity/survey/repository";

export class NewSurvey {
    constructor(private repo: ISurveyRepository) {
    }

    public async execute(survey: ISurveyInput): Promise<ISurvey> {
        return this.repo.create(survey);
    }
}
