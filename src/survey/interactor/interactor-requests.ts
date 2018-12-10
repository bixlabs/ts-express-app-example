import {QuestionType} from "../model/survey";

export interface SurveyRequest {
    name: string;
    questions?: QuestionRequest[];
}

export interface QuestionRequest {
    title: string;
    type: QuestionType;
}
