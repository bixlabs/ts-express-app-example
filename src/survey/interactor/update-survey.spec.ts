import {MemoryRepo} from "../../lib/repository/memory-repo";
import {SurveyRequest} from "./interactor-requests";
import {UpdateSurvey} from "./update-survey";

let repo: MemoryRepo;

beforeAll(async () => {
    repo = new MemoryRepo();
    await repo.create({name: "Sample", questions: []});
});

test("Allow update survey using its id", async () => {
    const interactor = new UpdateSurvey(repo);
    const updatedSurvey = await interactor.execute({id: 1, name: "Updated", questions: []});
    expect(updatedSurvey.id).toBe(1);
    expect(updatedSurvey.name).toBe("Updated");
});

type Data = any | SurveyRequest;

test("Doesn't allow update when id is null or undefined", async () => {
    const data: Data = {name: "Updated", questions: []};
    const data2: Data = {id: null, name: "Updated", questions: []};
    const interactor = new UpdateSurvey(repo);
    const check = async () => {
        await interactor.execute(data);
    };

    const check2 = async () => {
        await interactor.execute(data2);
    };

    expect(check()).rejects.toEqual(new Error("there's no id property present and it's mandatory"));
    expect(check2()).rejects.toEqual(new Error("there's no id property present and it's mandatory"));
});
