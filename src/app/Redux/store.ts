import { configureStore } from "@reduxjs/toolkit";
import { quizSlice } from "../feature/quiz/quizSlice";

export const store = configureStore({
  reducer: {
    Quiz: quizSlice.reducer,
  },
});
