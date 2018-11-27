import {INewSurveyRequest, ISurveyRequest} from "../interactor/interactor-requests";
import {ISurvey} from "../model/survey";

export interface ISurveyRepository {
    create(survey: INewSurveyRequest): Promise<ISurvey>;

    update(id: number, survey: ISurveyRequest): Promise<ISurvey>;

    findById(id: number): Promise<ISurvey>;
}
