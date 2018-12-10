import {QuestionRequest} from "../interactor/interactor-requests";
import {Question} from "../model/survey";
import {CrudRepository} from "./crud-repository";

export interface QuestionRepository extends CrudRepository<QuestionRequest, Question> {

}
