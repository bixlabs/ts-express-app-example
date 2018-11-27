import {ISurvey} from "../model/survey";
import {IQuestionRepository} from "../repository/question-repository";
import {ISurveyRepository} from "../repository/survey-repository";
import {INewQuestionRequest} from "./interactor-requests";

export class AddQuestion {
    constructor(private surveyR: ISurveyRepository, private questionR: IQuestionRepository) {
    }

    public async execute(id: number, data: INewQuestionRequest): Promise<ISurvey> {
        const survey = await this.surveyR.findById(id);
        const question = await this.questionR.create(data);
        survey.questions.push(question);

        return this.surveyR.update(id, survey);
    }
}
