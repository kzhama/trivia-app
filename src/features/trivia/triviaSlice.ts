import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { AnsweredQuestion, NormalizedQuizQuestionData } from "../../types/quizData";

export interface TriviaState {
	quizQuestions: NormalizedQuizQuestionData[];
	correctAnswersCount: number;
	totalQuestionsCount: number;
	answeredQuestions: AnsweredQuestion[];
}

const initialState: TriviaState = {
	quizQuestions: [],
	correctAnswersCount: 0,
	totalQuestionsCount: 0,
	answeredQuestions: [],
};

export const triviaSlice = createSlice({
	name: "trivia",
	initialState,
	reducers: {
		setQuizQuestions: (state, action: PayloadAction<NormalizedQuizQuestionData[]>) => {
			state.quizQuestions = action.payload;
		},
		setTotalQuestionsCount: (state, action: PayloadAction<number>) => {
			state.totalQuestionsCount = action.payload;
		},
		incrementCorrectAnswersCount: (state) => {
			state.correctAnswersCount += 1;
		},
		addAnsweredQuestion: (state, action: PayloadAction<AnsweredQuestion>) => {
			state.answeredQuestions.push(action.payload);
		},
		resetState: () => initialState,
	},
});

export const {
	setQuizQuestions,
	setTotalQuestionsCount,
	incrementCorrectAnswersCount,
	addAnsweredQuestion,
	resetState,
} = triviaSlice.actions;

export default triviaSlice.reducer;
