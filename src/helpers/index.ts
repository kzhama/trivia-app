import sanitizeHtml from "sanitize-html";

import { QuizQuestionData } from "../types/quizData";

export const sanitizeAndNormalizeData = (data: Array<QuizQuestionData>) =>
	data.map((currentQuestion) => {
		const transformedStringAnswerToBoolean = currentQuestion.correct_answer === "True";
		const sanitizedQuestion = sanitizeHtml(currentQuestion.question);
		return {
			...currentQuestion,
			correct_answer: transformedStringAnswerToBoolean,
			question: sanitizedQuestion,
		};
	});
