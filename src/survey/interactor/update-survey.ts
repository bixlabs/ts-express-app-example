import {ISurvey} from "../model/survey";
import {ISurveyRepository} from "../repository/survey-repository";
import {ISurveyRequest} from "./interactor-requests";

export class UpdateSurvey {
    constructor(private repo: ISurveyRepository) {
    }

    public async execute(survey: ISurveyRequest): Promise<ISurvey> {
        return this.repo.update(survey.id, survey);
    }
}
