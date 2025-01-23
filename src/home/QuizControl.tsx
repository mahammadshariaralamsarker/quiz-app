import { nextQuestion, previousQuestion } from "@/app/feature/quiz/quizSlice";
import { useAppDispatch, UseAppSelector } from "@/app/Redux/hooks";
import { Button } from "@/components/ui/button";
import React from "react";

export default function QuizControl() {
  const { currentQuestionIndex, question,userAnswers } = UseAppSelector(
    (state) => state.quiz
  );
  const dispatch = useAppDispatch();
  const isAnswerSelected = userAnswers[currentQuestionIndex] !==null
  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };
  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };

  return (
    <div className="flex justify-between mt-4  ">
      <Button
        disabled={currentQuestionIndex === 0}
        onClick={handlePreviousQuestion}
      >
        Previous
      </Button>
      {currentQuestionIndex < question.length - 1 && (
        <Button disabled={!isAnswerSelected} onClick={handleNextQuestion}>Next</Button>
      )}
      {currentQuestionIndex === question.length - 1 && (
        <Button>Quiz Complete</Button>
      )}
    </div>
  );
}
