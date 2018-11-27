
export interface ISurveyInput {
    id?: number;
    name: string;
    questions: ISurveyQuestion[];
}

export interface ISurvey {
    id: number;
    name: string;
    questions: ISurveyQuestion[];
}

export enum QuestionType {
    Simple = 0,
    Text = 1,
}

export interface ISurveyQuestion {
    id?: string;
    title: string;
    type: QuestionType;
}
