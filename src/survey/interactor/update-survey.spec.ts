import {FakeRepo} from "../repository/fake-repo";
import {UpdateSurvey} from "./update-survey";

let repo: FakeRepo;

beforeAll(async () => {
    repo = new FakeRepo();
    await repo.create({name: "Sample", questions: []});
});

test("Allow update survey using its id", async () => {
    const interactor = new UpdateSurvey(repo);
    const updatedSurvey = await interactor.execute(1, {name: "Updated", questions: []});
    expect(updatedSurvey.id).toBe(1);
    expect(updatedSurvey.name).toBe("Updated");
});
