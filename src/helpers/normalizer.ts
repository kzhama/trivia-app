import { QuizQuestionData } from "../types/quizData";

export const normalizeQuizQuestionData = (data: Array<QuizQuestionData>) => {
	return data.map((currentQuestion) => {
		const normalizedCorrectAnswer = currentQuestion.correct_answer === "True" ? true : false;
		const sanitizedQuestionString = currentQuestion.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
		return {
			...currentQuestion,
			correct_answer: normalizedCorrectAnswer,
			question: sanitizedQuestionString,
		};
	});
};
