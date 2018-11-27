import {ISurvey} from "../model/survey";
import {ISurveyRepository} from "../repository/survey-repository";
import {ISurveyRequest} from "./model";

export class NewSurvey {
    constructor(private repo: ISurveyRepository) {
    }

    public async execute(survey: ISurveyRequest): Promise<ISurvey> {
        return this.repo.create(survey);
    }
}
