import {MemoryRepo} from "../../lib/repository/memory-repo";
import {NewEmptySurvey} from "./new-empty-survey";

test("Allow create a empty survey by just indicating its name", async () => {
    const repo = new MemoryRepo();
    const interactor = new NewEmptySurvey(repo);
    const survey = await interactor.execute("Sample");
    expect(survey.id).toBe(1);
    expect(survey.name).toBe("Sample");
    expect(survey.questions).toMatchObject([]);
});
