import { UseAppSelector } from "@/app/Redux/hooks";
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
  const { question, currentQuestionIndex } = UseAppSelector(
    (state) => state.quiz
  );
  const currentQuestion = question[currentQuestionIndex];
  console.log(currentQuestion);
  return (
    <div className="ml-12">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          <CardDescription>
            Question {currentQuestionIndex + 1} of {question.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentQuestion.options.map((option, index) => (
            <Button key={index} className="w-full mt-3">{option}</Button>
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
