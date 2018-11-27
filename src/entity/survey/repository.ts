import {IQuestionInput, ISurvey, ISurveyInput, ISurveyQuestion} from "./models";

export interface ISurveyRepository {
    create(survey: ISurveyInput): Promise<ISurvey>;

    update(id: number, survey: ISurveyInput): Promise<ISurvey>;

    findById(id: number): Promise<ISurvey>;
}

export interface ISurveyQuestionRepository {
    create(question: IQuestionInput): Promise<ISurveyQuestion>;

    update(id: number, question: IQuestionInput): Promise<ISurveyQuestion>;

    findById(id: number): Promise<ISurveyQuestion>;
}
