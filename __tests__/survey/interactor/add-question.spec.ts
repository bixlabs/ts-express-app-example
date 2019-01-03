import {MemoryRepo} from "../../../src/lib/repository/memory-repo";
import {QuestionType} from "../../../src/survey/model/survey";
import {QuestionRepository} from "../../../src/survey/repository/question-repository";
import {SurveyRepository} from "../../../src/survey/repository/survey-repository";
import {AddQuestion} from "../../../src/survey/interactor/add-question";

let surveyRepo: SurveyRepository;
let questionRepo: QuestionRepository;

beforeEach(async () => {
    surveyRepo = new MemoryRepo();
    questionRepo = new MemoryRepo();

    await surveyRepo.create({name: "Sample", questions: []});
});

test("Allow add a question to a survey", async () => {
    const interactor = new AddQuestion(surveyRepo, questionRepo);
    await interactor.execute(1, {title: "How are you?", type: QuestionType.Simple});

    const survey = await surveyRepo.findById(1);
    expect(survey.questions).toHaveLength(1);
    const [question] = survey.questions;
    expect(question.id).toBe(1);
    expect(question.title).toBe("How are you?");
});

test("Allow add more than one question", async () => {
    const interactor = new AddQuestion(surveyRepo, questionRepo);
    const titles = [
        "How are your parents?",
        "How is your day?",
        "What is your favorite color?",
    ];
    await Promise.all(titles.map((title) => interactor.execute(1, {title, type: QuestionType.Simple})));

    const survey = await surveyRepo.findById(1);
    expect(survey.questions).toHaveLength(3);
    const [, question] = survey.questions;
    expect(question.id).toBe(2);
    expect(question.title).toBe("How is your day?");
});
