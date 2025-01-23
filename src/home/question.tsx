 
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
  const {question,currentQuestionIndex}  = UseAppSelector((state)=>state.quiz)
  const currentQuestion = question[currentQuestionIndex]
  console.log(currentQuestion);
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h1>Card Content </h1>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Exit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
