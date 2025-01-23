import { nextQuestion, previousQuestion } from '@/app/feature/quiz/quizSlice'
import { useAppDispatch } from '@/app/Redux/hooks'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function QuizControl() {
  const dispatch = useAppDispatch()
  const handleNextQuestion = () =>{
    dispatch(nextQuestion())
  }
  const handlePreviosQuestion = () =>{
    dispatch(previousQuestion())
  }



  return (
    <div className='flex justify-between mt-4  '>
      <Button onClick={handlePreviosQuestion}>Previous</Button>
      <Button onClick={handleNextQuestion}>Next</Button>
    </div>
  )
}
