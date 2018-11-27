import {QuestionType} from "../../entity/survey/models";
import {ISurveyQuestionRepository, ISurveyRepository} from "../../entity/survey/repository";
import {MemoryRepo} from "../../lib/repository/memory-repo";
import {AddQuestion} from "./add-question";

let surveyRepo: ISurveyRepository;
let questionRepo: ISurveyQuestionRepository;

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
    const [_, question] = survey.questions;
    expect(question.id).toBe(2);
    expect(question.title).toBe("How is your day?");
});
