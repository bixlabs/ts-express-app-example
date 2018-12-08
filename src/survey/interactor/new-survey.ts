import {Survey} from "../model/survey";
import {SurveyRepository} from "../repository/survey-repository";
import {NewSurveyRequest} from "./interactor-requests";

export class NewSurvey {
    constructor(private repo: SurveyRepository) {
    }

    public async execute(survey: NewSurveyRequest): Promise<Survey> {
        return this.repo.create(survey);
    }
}
