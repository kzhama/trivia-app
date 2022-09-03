import sanitizeHtml from "sanitize-html";

import { QuizQuestionData } from "../types/quizData";

export const sanitizeAndNormalizeData = (data: Array<QuizQuestionData>) => {
	return data.map((currentQuestion) => {
		const transformedStringAnswerToBoolean = currentQuestion.correct_answer === "True" ? true : false;
		const sanitizedQuestion = sanitizeHtml(currentQuestion.question);
		return {
			...currentQuestion,
			correct_answer: transformedStringAnswerToBoolean,
			question: sanitizedQuestion,
		};
	});
};
