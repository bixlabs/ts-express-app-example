import {INewQuestionRequest, IQuestionRequest} from "../interactor/interactor-requests";
import {IQuestion} from "../model/survey";

export interface IQuestionRepository {
    create(question: INewQuestionRequest): Promise<IQuestion>;

    update(id: number, question: IQuestionRequest): Promise<IQuestion>;

    findById(id: number): Promise<IQuestion>;
}
