import {NewQuestionRequest, QuestionRequest} from "../interactor/interactor-requests";
import {Question} from "../model/survey";

export interface QuestionRepository {
    create(question: NewQuestionRequest): Promise<Question>;

    update(id: number, question: QuestionRequest): Promise<Question>;

    findById(id: number): Promise<Question>;
}
