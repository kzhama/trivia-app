import { configureStore } from "@reduxjs/toolkit";

import triviaReducer from "../features/trivia/triviaSlice";

export const store = configureStore({
	reducer: {
		triviaReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
