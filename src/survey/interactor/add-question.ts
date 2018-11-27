import {IQuestionInput, ISurvey} from "../../entity/survey/models";
import {IQuestionRepository, ISurveyRepository} from "../../entity/survey/repository";

export class AddQuestion {
    constructor(private surveyR: ISurveyRepository, private questionR: IQuestionRepository) {
    }

    public async execute(id: number, data: IQuestionInput): Promise<ISurvey> {
        const survey = await this.surveyR.findById(id);
        const question = await this.questionR.create(data);
        survey.questions.push(question);

        return this.surveyR.update(id, survey);
    }
}
