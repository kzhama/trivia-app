import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setQuizQuestions, setTotalQuestionsCount } from "../features/trivia/triviaSlice";
import { normalizeQuizQuestionData } from "../helpers/normalizer";
import { QuizDataResponse } from "../types/quizData";

export const useGetQuizData = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const dispatch = useDispatch();

	useEffect(() => {
		async function getQuizData() {
			setIsLoading(true);
			setError(null);
			try {
				const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");
				const quizDataResponse: QuizDataResponse = await response.json();
				const quizQuestions = quizDataResponse.results;
				const normalizedQuizQuestionData = normalizeQuizQuestionData(quizQuestions);
				dispatch(setQuizQuestions(normalizedQuizQuestionData));
				dispatch(setTotalQuestionsCount(quizQuestions.length));
				console.log({ quizQuestions });
				console.log({ quizQuestionsLength: quizQuestions.length });
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
		}
		getQuizData();
	}, []);

	return {
		isLoading,
		error,
	};
};
