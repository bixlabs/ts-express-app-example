import {QuestionRequest} from "../usecase/interactor-requests";
import {Question} from "../entity/question";
import {CrudRepository} from "./crud-repository";

export interface QuestionRepository extends CrudRepository<QuestionRequest, Question> {

}
