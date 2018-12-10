import {Crud} from "../../lib/repository/memory-repo";
import {QuestionRequest} from "../interactor/interactor-requests";
import {Question} from "../model/survey";

export interface QuestionRepository extends Crud<QuestionRequest, Question> {
    create(question: QuestionRequest): Promise<Question>;

    update(id: number, question: Question): Promise<Question>;

    findById(id: number): Promise<Question>;
}
