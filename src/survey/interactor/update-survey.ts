import {ISurvey} from "../model/survey";
import {ISurveyRepository} from "../repository/survey-repository";
import {ISurveyRequest} from "./model";

export class UpdateSurvey {
    constructor(private repo: ISurveyRepository) {
    }

    public async execute(id: number, survey: ISurveyRequest): Promise<ISurvey> {
        return this.repo.update(id, survey);
    }
}
