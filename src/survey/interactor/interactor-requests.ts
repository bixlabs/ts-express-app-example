import {QuestionType} from "../model/survey";

export interface SurveyRequest {
    id: number;
    name?: string;
    questions?: QuestionRequest[];
}

export interface NewSurveyRequest {
    name: string;
    questions: QuestionRequest[];
}

export interface QuestionRequest {
    id: number;
    title?: string;
    type?: QuestionType;
}

export interface NewQuestionRequest {
    title: string;
    type: QuestionType;
}
