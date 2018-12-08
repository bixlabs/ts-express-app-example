export interface Survey {
    id: number;
    name: string;
    questions: Question[];
}

export enum QuestionType {
    Simple = 0,
    Text = 1,
}

export interface Question {
    id: number;
    title: string;
    type: QuestionType;
}
