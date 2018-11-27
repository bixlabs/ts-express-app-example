import {QuestionType} from "../model/survey";

export interface ISurveyRequest {
    id?: number;
    name: string;
    questions: IQuestionRequest[];
}

export interface IQuestionRequest {
    id?: number;
    title: string;
    type: QuestionType;
}
