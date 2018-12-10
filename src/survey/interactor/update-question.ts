import {Question, Survey} from "../model/survey";
import {QuestionRepository} from "../repository/question-repository";
import {SurveyRepository} from "../repository/survey-repository";

export class UpdateQuestion {
    constructor(private surveyR: SurveyRepository, private questionR: QuestionRepository) {

    }

    public async execute(id: number, data: Question): Promise<Survey> {
        const survey = await this.surveyR.findById(id);
        const question = await this.questionR.findById(data.id);
        const questionIndex = survey.questions.findIndex((surveyQuestion) => question.id === surveyQuestion.id);
        survey.questions[questionIndex] = await this.questionR.update(data.id, data);
        return this.surveyR.update(id, survey);
    }
}
