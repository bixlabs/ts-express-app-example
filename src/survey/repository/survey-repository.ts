import {SurveyRequest} from "../usecase/interactor-requests";
import {Survey} from "../entity/survey";
import {CrudRepository} from "./crud-repository";

export interface SurveyRepository extends CrudRepository<SurveyRequest, Survey> {
}
