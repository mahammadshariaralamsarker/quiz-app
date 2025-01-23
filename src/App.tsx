 
import "./App.css";
import { UseAppSelector } from "./app/Redux/hooks";
import Question from "./home/Question";

function App() {
  const {quizcomplete} = UseAppSelector((state)=>state.quiz)
  return (
    <>
    <h1 className="text-center text-6xl m-8 ">Quiz App</h1> 
    
      {
        !quizcomplete ?   <Question />:<>QuizSummary</>
      }
    </>
  );
}

export default App;
