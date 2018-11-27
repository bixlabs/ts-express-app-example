import {ISurvey, ISurveyInput} from "../../entity/survey/models";
import {ISurveyRepository} from "../../entity/survey/repository";

interface IFakeRepoData {
    [key: number]: ISurvey;
}

export class FakeRepo implements ISurveyRepository {
    private idSurvey = 1;
    private data: IFakeRepoData = {};

    public async create(survey: ISurveyInput): Promise<ISurvey> {
        const newSurvey = {
            id: this.idSurvey++,
            name: survey.name,
            questions: survey.questions,
        };

        this.data[newSurvey.id] = newSurvey;

        return newSurvey;
    }

    public async update(id: number, survey: ISurveyInput): Promise<ISurvey> {
        const existentSurvey = this.data[id];
        if (!existentSurvey) {
            throw new Error(`there's no survey by id: ${id}`);
        }

        this.data[id] = Object.assign(this.data, survey, {id});

        return this.data[id];
    }
}
