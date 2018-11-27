import {IQuestion, IQuestionInput, ISurvey, ISurveyInput} from "./models";

export interface ISurveyRepository {
    create(survey: ISurveyInput): Promise<ISurvey>;

    update(id: number, survey: ISurveyInput): Promise<ISurvey>;

    findById(id: number): Promise<ISurvey>;
}

export interface IQuestionRepository {
    create(question: IQuestionInput): Promise<IQuestion>;

    update(id: number, question: IQuestionInput): Promise<IQuestion>;

    findById(id: number): Promise<IQuestion>;
}
