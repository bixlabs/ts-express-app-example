import {ISurvey} from "../../entity/survey/models";
import {ISurveyRepository} from "../../entity/survey/repository";
import {CreateSurvey} from "./create-survey";

export class CreateEmptySurvey {
    constructor(private repo: ISurveyRepository) {
    }

    public async execute(name: string): Promise<ISurvey> {
        const createSurvey = new CreateSurvey(this.repo);
        return createSurvey.execute({name, questions: []});
    }
}
