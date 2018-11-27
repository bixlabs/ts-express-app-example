import {MemoryRepo} from "../../lib/repository/memory-repo";
import {CreateEmptySurvey} from "./create-empty-survey";

test("Allow create a empty survey by just indicating its name", async () => {
    const repo = new MemoryRepo();
    const interactor = new CreateEmptySurvey(repo);
    const survey = await interactor.execute("Sample");
    expect(survey.id).toBe(1);
    expect(survey.name).toBe("Sample");
    expect(survey.questions).toMatchObject([]);
});
