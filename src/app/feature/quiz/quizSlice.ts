import { quizData } from "@/home/quizData";
import { createSlice } from "@reduxjs/toolkit";

interface TQuiz {
  question: typeof quizData;
  currentQuestionIndex: number;
  useAnswers: (string | null)[];
  quizComplete: boolean;
}

const initialState: TQuiz = {
  question: quizData,
  currentQuestionIndex: 0,
  useAnswers: Array(quizData.length).fill(null),
  quizComplete: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer :(state,action) =>{
       const {questionIndex, answer} = action.payload
       console.log(questionIndex, answer);
    }
  },
});
export  const {setAnswer} = quizSlice.actions
export default quizSlice.reducer;
