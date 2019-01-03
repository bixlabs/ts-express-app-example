import {Survey} from "../entity/survey";
import {SurveyRepository} from "../repository/survey-repository";
import {NewSurvey} from "./new-survey";

export class NewEmptySurvey {
    constructor(private repo: SurveyRepository) {
    }

    public async execute(name: string): Promise<Survey> {
        const createSurvey = new NewSurvey(this.repo);
        return createSurvey.execute({name, questions: []});
    }
}
