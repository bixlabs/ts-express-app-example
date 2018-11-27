export interface ISurvey {
    id: number;
    name: string;
    questions: IQuestion[];
}

export enum QuestionType {
    Simple = 0,
    Text = 1,
}

export interface IQuestion {
    id: number;
    title: string;
    type: QuestionType;
}
