import {Survey} from "../model/survey";
import {SurveyRepository} from "../repository/survey-repository";
import {SurveyRequest} from "./interactor-requests";

export class NewSurvey {
    constructor(private repo: SurveyRepository) {
    }

    public async execute(survey: SurveyRequest): Promise<Survey> {
        return this.repo.create(survey);
    }
}
