import {ISurveyQuestionRepository, ISurveyRepository} from "../../entity/survey/repository";
import {ISurvey, ISurveyQuestion} from "../../entity/survey/models";

export class UpdateQuestion {
    constructor(private surveyR: ISurveyRepository, private questionR: ISurveyQuestionRepository) {

    }

    public async execute(id: number, data: ISurveyQuestion): Promise<ISurvey> {
        const survey = await this.surveyR.findById(id);
        const question = await this.questionR.findById(data.id);
        const questionIndex = survey.questions.findIndex((surveyQuestion) => question.id === surveyQuestion.id);
        survey.questions[questionIndex] = await this.questionR.update(data.id, data);
        return this.surveyR.update(id, survey);
    }
}