import {ISurvey} from "../model/survey";
import {IQuestionRepository} from "../repository/question-repository";
import {ISurveyRepository} from "../repository/survey-repository";
import {IQuestionRequest} from "./interactor-requests";

export class UpdateQuestion {
    constructor(private surveyR: ISurveyRepository, private questionR: IQuestionRepository) {

    }

    public async execute(id: number, data: IQuestionRequest): Promise<ISurvey> {
        const survey = await this.surveyR.findById(id);
        const question = await this.questionR.findById(data.id);
        const questionIndex = survey.questions.findIndex((surveyQuestion) => question.id === surveyQuestion.id);
        survey.questions[questionIndex] = await this.questionR.update(data.id, data);
        return this.surveyR.update(id, survey);
    }
}
