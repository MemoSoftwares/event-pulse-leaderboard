
import { createSlice } from '@reduxjs/toolkit';
import { questions } from '../data/questions';

const initialState = {
  currentQuestionIndex: 0,
  answers: [],
  completed: false,
  submitted: false, // New field to track if quiz has been submitted
  score: 0,
  timeRemaining: 15 * 60, // 15 minutes in seconds
  timeTaken: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, selectedOption } = action.payload;
      state.answers.push({ questionId, selectedOption });
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.completed = true;
        // Calculate score
        let totalScore = 0;
        state.answers.forEach((answer) => {
          const question = questions.find(q => q.id === answer.questionId);
          if (question && question.correctAnswer === answer.selectedOption) {
            totalScore += 100;
          }
        });
        state.score = totalScore;
      }
    },
    updateTime: (state, action) => {
      state.timeRemaining = action.payload;
    },
    completeQuiz: (state, action) => {
      state.completed = true;
      state.score = action.payload.score;
      state.timeTaken = action.payload.timeTaken;
    },
    submitQuiz: (state) => {
      state.submitted = true;
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.answers = [];
      state.completed = false;
      state.submitted = false;
      state.score = 0;
      state.timeRemaining = 15 * 60;
      state.timeTaken = 0;
    },
  },
});

export const { 
  answerQuestion, 
  nextQuestion, 
  updateTime, 
  completeQuiz, 
  submitQuiz,
  resetQuiz 
} = quizSlice.actions;

export default quizSlice.reducer;
