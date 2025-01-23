import { setAnswer } from "@/app/feature/quiz/quizSlice";
import { useAppDispatch, UseAppSelector } from "@/app/Redux/hooks";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import QuizControl from "./QuizControl"; 

export default function Question() {
  const dispatch = useAppDispatch();
  const {
    question,
    currentQuestionIndex,
    userAnswers: userAnswers,
  } = UseAppSelector((state) => state.quiz);
  const currentQuestion = question[currentQuestionIndex];
  const currentAnswer = userAnswers[currentQuestionIndex];
  console.log(currentAnswer);
  const handleAnswersChange = (answer: string) => {
    dispatch(setAnswer({ questionIndex: currentQuestionIndex, answer }));
  };
  return (
    <div className="flex justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          <CardDescription>
            Question {currentQuestionIndex + 1} of {question.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentQuestion.options.map((option, index) => (
            <Button
              onClick={() => handleAnswersChange(option)}
              key={index}
              className="w-full mt-3"
              variant={option === currentAnswer ? "default":"outline"}
            >
              {option}
            </Button>
          ))}
          <QuizControl />
        </CardContent>
      </Card>
    </div>
  );
}
