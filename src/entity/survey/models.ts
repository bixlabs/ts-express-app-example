
export interface ISurveyInput {
    id?: number;
    name: string;
    questions: IQuestion[];
}

export interface ISurvey {
    id: number;
    name: string;
    questions: IQuestion[];
}

export enum QuestionType {
    Simple = 0,
    Text = 1,
}

export interface IQuestionInput {
    id?: number;
    title: string;
    type: QuestionType;
}

export interface IQuestion {
    id: number;
    title: string;
    type: QuestionType;
}
