import {MemoryRepo} from "../../../src/lib/repository/memory-repo";
import {QuestionType} from "../../../src/survey/entity/question";
import {QuestionRepository} from "../../../src/survey/repository/question-repository";
import {SurveyRepository} from "../../../src/survey/repository/survey-repository";
import {AddQuestion} from "../../../src/survey/usecase/add-question";
import {NewSurvey} from "../../../src/survey/usecase/new-survey";
import {UpdateQuestion} from "../../../src/survey/usecase/update-question";

let surveyRepo: SurveyRepository;
let questionRepo: QuestionRepository;

beforeEach(async () => {
    surveyRepo = new MemoryRepo();
    questionRepo = new MemoryRepo();

    await (new NewSurvey(surveyRepo)).execute({name: "Sample", questions: []});
    const interactor = new AddQuestion(surveyRepo, questionRepo);
    await interactor.execute(1, {title: "How are you?", type: QuestionType.Simple});
});

test("Allow update an existent question", async () => {
    const interactor = new UpdateQuestion(surveyRepo, questionRepo);
    const question = await questionRepo.findById(1);
    question.title = "How's going your day?";
    const survey = await interactor.execute(1, question);

    expect(survey.questions[0].id).toBe(1);
    expect(survey.questions[0].title).toBe("How's going your day?");
});
