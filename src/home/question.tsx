import { setAnswer } from "@/app/feature/quiz/quizSlice";
import { useAppDispatch, UseAppSelector } from "@/app/Redux/hooks";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Question() {
  const dispatch = useAppDispatch()
  const { question, currentQuestionIndex } = UseAppSelector(
    (state) => state.quiz
  );
  const currentQuestion = question[currentQuestionIndex]; 
  const  handleAnswersChange = (answer:string) =>{
    console.log(answer);
    dispatch(setAnswer({questionIndex:currentQuestionIndex, answer}))
  }
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
            <Button onClick={()=>handleAnswersChange(option)} key={index} className="w-full mt-3">{option}</Button>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Previous</Button>
          <Button>Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
