import {Survey} from "../model/survey";
import {SurveyRepository} from "../repository/survey-repository";
import {SurveyRequest} from "./interactor-requests";

export class UpdateSurvey {
    constructor(private repo: SurveyRepository) {
    }

    public async execute(survey: SurveyRequest): Promise<Survey> {
        return this.repo.update(survey.id, survey);
    }
}
