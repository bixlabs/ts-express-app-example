import {Survey} from "../entity/survey";
import {QuestionRepository} from "../repository/question-repository";
import {SurveyRepository} from "../repository/survey-repository";
import {QuestionRequest} from "./interactor-requests";

export class AddQuestion {
    constructor(private surveyR: SurveyRepository, private questionR: QuestionRepository) {
    }

    public async execute(id: number, data: QuestionRequest): Promise<Survey> {
        const survey = await this.surveyR.findById(id);
        const question = await this.questionR.create(data);
        survey.questions.push(question);

        return this.surveyR.update(id, survey);
    }
}
