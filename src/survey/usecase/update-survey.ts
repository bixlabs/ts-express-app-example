import {Survey} from "../entity/survey";
import {SurveyRepository} from "../repository/survey-repository";

export class UpdateSurvey {
    constructor(private repo: SurveyRepository) {
    }

    public async execute(survey: Survey): Promise<Survey> {
        return this.repo.update(survey.id, survey);
    }
}
