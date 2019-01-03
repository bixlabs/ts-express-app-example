import {QuestionType} from "../entity/question";

export interface SurveyRequest {
    name: string;
    questions?: QuestionRequest[];
}

export interface QuestionRequest {
    title: string;
    type: QuestionType;
}
