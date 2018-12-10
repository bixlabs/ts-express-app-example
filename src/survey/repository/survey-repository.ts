import {SurveyRequest} from "../interactor/interactor-requests";
import {Survey} from "../model/survey";
import {CrudRepository} from "./crud-repository";

export interface SurveyRepository extends CrudRepository<SurveyRequest, Survey> {
}
