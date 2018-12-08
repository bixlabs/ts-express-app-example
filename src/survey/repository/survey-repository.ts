import {NewSurveyRequest, SurveyRequest} from "../interactor/interactor-requests";
import {Survey} from "../model/survey";

export interface SurveyRepository {
    create(survey: NewSurveyRequest): Promise<Survey>;

    update(id: number, survey: SurveyRequest): Promise<Survey>;

    findById(id: number): Promise<Survey>;
}
