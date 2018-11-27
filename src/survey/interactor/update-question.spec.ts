import {MemoryRepo} from "../../lib/repository/memory-repo";
import {QuestionType} from "../model/survey";
import {IQuestionRepository} from "../repository/question-repository";
import {ISurveyRepository} from "../repository/survey-repository";
import {AddQuestion} from "./add-question";
import {NewSurvey} from "./new-survey";
import {UpdateQuestion} from "./update-question";

let surveyRepo: ISurveyRepository;
let questionRepo: IQuestionRepository;

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
