import "./less/style.less"
import { QuestionView } from "./core/viewer/questionView";
import { Question } from "./core/question";

const qv = new QuestionView();
const question = new Question();
qv.init(question);




