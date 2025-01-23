import { Button } from '@/components/ui/button'
import React from 'react'

export default function QuizControl() {
  return (
    <div className='flex justify-between mt-4  '>
      <Button>Previous</Button>
      <Button>Next</Button>
    </div>
  )
}
