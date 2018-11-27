import {ISurvey} from "../model/survey";
import {ISurveyRepository} from "../repository/survey-repository";
import {NewSurvey} from "./new-survey";

export class NewEmptySurvey {
    constructor(private repo: ISurveyRepository) {
    }

    public async execute(name: string): Promise<ISurvey> {
        const createSurvey = new NewSurvey(this.repo);
        return createSurvey.execute({name, questions: []});
    }
}
