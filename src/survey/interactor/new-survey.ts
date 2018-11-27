import {ISurvey} from "../model/survey";
import {ISurveyRepository} from "../repository/survey-repository";
import {INewSurveyRequest} from "./interactor-requests";

export class NewSurvey {
    constructor(private repo: ISurveyRepository) {
    }

    public async execute(survey: INewSurveyRequest): Promise<ISurvey> {
        return this.repo.create(survey);
    }
}
