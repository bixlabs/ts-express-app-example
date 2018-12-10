import {Crud} from "../../lib/repository/memory-repo";
import {SurveyRequest} from "../interactor/interactor-requests";
import {Survey} from "../model/survey";

export interface SurveyRepository extends Crud<SurveyRequest, Survey> {
    create(survey: SurveyRequest): Promise<Survey>;

    update(id: number, survey: Survey): Promise<Survey>;

    findById(id: number): Promise<Survey>;
}
