import {Question} from "./question";

export interface Survey {
    id: number;
    name: string;
    questions: Question[];
}
