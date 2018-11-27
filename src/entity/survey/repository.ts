import {ISurvey, ISurveyInput} from "./models";

export interface ISurveyRepository {
    create(survey: ISurveyInput): Promise<ISurvey>;

    update(id: number, survey: ISurveyInput): Promise<ISurvey>;
}
