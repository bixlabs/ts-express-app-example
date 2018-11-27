import {IQuestionRequest} from "../interactor/model";
import {IQuestion} from "../model/survey";

export interface IQuestionRepository {
    create(question: IQuestionRequest): Promise<IQuestion>;

    update(id: number, question: IQuestionRequest): Promise<IQuestion>;

    findById(id: number): Promise<IQuestion>;
}
