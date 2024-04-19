import { configureStore } from "@reduxjs/toolkit";
import quizzesReducer from "../Courses/Quizzes/reducer";
import modulesReducer from "../Courses/Modules/reducer";

export interface KanbasState {
  quizzesReducer: {
    quizzes: any[];
    quiz: any;
    answers: string[];
    answer: string;
  };
  modulesReducer: {
    modules: any[];
    module: any;
  };
  
  // placeholder, to be removed---question reducer
  questionsReducer: {
    questions: any[];
    question: any;
  };

}
const store = configureStore({
  reducer: {
    quizzesReducer,
    modulesReducer,
  }
});

export default store;