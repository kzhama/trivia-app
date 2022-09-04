import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setQuizQuestions, setTotalQuestionsCount, resetState } from "../features/trivia/triviaSlice";
import { sanitizeAndNormalizeData } from "../helpers";
import { QuizDataResponse } from "../types/quizData";

const QUIZ_DATA_URL = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean";

const useGetQuizData = () => {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const getQuizData = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		dispatch(resetState());

		try {
			const response = await fetch(QUIZ_DATA_URL);
			const quizDataResponse: QuizDataResponse = await response.json();
			const quizQuestions = quizDataResponse.results;
			const normalizedQuizQuestionData = sanitizeAndNormalizeData(quizQuestions);

			dispatch(setQuizQuestions(normalizedQuizQuestionData));
			dispatch(setTotalQuestionsCount(quizQuestions.length));
		} catch (err) {
			if (err instanceof Error) {
				setError(err);
			} else {
				console.error("Error while fetching quiz data, error is not of type 'Error", err);
				setError(new Error("Error of uknown type, check console log"));
			}
		} finally {
			setIsLoading(false);
		}
	}, [dispatch]);

	useEffect(() => {
		getQuizData();
	}, [getQuizData]);

	return {
		isLoading,
		error,
	};
};

export default useGetQuizData;
