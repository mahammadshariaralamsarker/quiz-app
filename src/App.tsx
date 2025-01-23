import "./App.css";
import { UseAppSelector } from "./app/Redux/hooks";
import Question from "./home/Question";
import QuizSummary from "./home/QuizSummary";

function App() {
  const { completeQuiz } = UseAppSelector((state) => state.quiz);
  return (
    <div>
      <h1 className="text-center text-6xl m-8">Quiz App</h1>
      {completeQuiz ? <Question /> : <QuizSummary/>}
    </div>
  );
}

export default App;
