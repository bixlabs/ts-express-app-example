import {ISurveyRequest} from "../interactor/model";
import {ISurvey} from "../model/survey";

export interface ISurveyRepository {
    create(survey: ISurveyRequest): Promise<ISurvey>;

    update(id: number, survey: ISurveyRequest): Promise<ISurvey>;

    findById(id: number): Promise<ISurvey>;
}
