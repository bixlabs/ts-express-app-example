import {MemoryRepo} from "../../lib/repository/memory-repo";
import {UpdateSurvey} from "./update-survey";

let repo: MemoryRepo;

beforeAll(async () => {
    repo = new MemoryRepo();
    await repo.create({name: "Sample", questions: []});
});

test("Allow update survey using its id", async () => {
    const interactor = new UpdateSurvey(repo);
    const updatedSurvey = await interactor.execute(1, {name: "Updated", questions: []});
    expect(updatedSurvey.id).toBe(1);
    expect(updatedSurvey.name).toBe("Updated");
});
