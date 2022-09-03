export interface QuizQuestionData {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
}

export interface NormalizedQuizQuestionData {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: boolean;
	incorrect_answers: string[];
}

export interface QuizDataResponse {
	response_code: number;
	results: QuizQuestionData[];
}

export type AnsweredQuestion = {
	question: string;
	wasAnsweredCorrectly: boolean;
};
