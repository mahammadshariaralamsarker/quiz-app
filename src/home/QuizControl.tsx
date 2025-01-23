import { nextQuestion, previousQuestion } from "@/app/feature/quiz/quizSlice";
import { useAppDispatch, UseAppSelector } from "@/app/Redux/hooks";
import { Button } from "@/components/ui/button";
import React from "react";

export default function QuizControl() {
  const {currentQuestionIndex} = UseAppSelector(
    (state)=>state.quiz
  )
  const dispatch = useAppDispatch();
  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };
  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };

  return (
    <div className="flex justify-between mt-4  ">
      <Button disabled={currentQuestionIndex===0} onClick={handlePreviousQuestion}>Previous</Button>
      <Button onClick={handleNextQuestion}>Next</Button>
    </div>
  );
}
