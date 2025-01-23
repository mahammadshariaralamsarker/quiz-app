import { UseAppSelector } from "@/app/Redux/hooks";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { Progress } from "@/components/ui/progress";

export default function QuizSummary() {
  const { question, userAnswers } = UseAppSelector((state) => state.quiz);
  const correctAnswer = question.reduce((count, qna, index) => {
    return qna.correctAnswer === userAnswers[index] ? count + 1 : count;
  }, 0);
  const correctAnswerPresentence = parseFloat(
    ((correctAnswer / question.length) * 100).toFixed(2)
  );
  return (
    <div className="flex justify-center">
      <Card className="w-[450px]   ">
        <CardHeader className="text-center">Quiz Summary</CardHeader>
        <CardContent>
          You Have Got {correctAnswer} out of {question.length}
        </CardContent>
        <Progress value={correctAnswerPresentence} />
      </Card>
    </div>
  );
}
