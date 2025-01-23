import { UseAppSelector } from "@/app/Redux/hooks";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

export default function QuizSummary() {
  const {question,userAnswers} = UseAppSelector((state)=> state.quiz)
  
  return (
    <div className="flex justify-center">
      <Card className="w-[450px]   ">
        <CardHeader className="text-center">Quiz Summary</CardHeader>
        <CardContent>You Have Got</CardContent>
      </Card>
    </div>
  );
}
