import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Group, Text } from "@mantine/core";
import { RootState } from "../store";
import { addAnsweredQuestion, incrementCorrectAnswersCount } from "../features/trivia/triviaSlice";
import { AnsweredQuestion } from "../types/quizData";

const Quiz = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const quizQuestions = useSelector((state: RootState) => state.triviaReducer.quizQuestions);

	const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);

	const currentQuestion = quizQuestions[currentQuestionNumber - 1];

	const handleOnClick = (userAnswer: boolean) => {
		if (currentQuestionNumber === 10) navigate("/results");
		const wasAnsweredCorrectly = userAnswer === currentQuestion.correct_answer;

		if (wasAnsweredCorrectly) dispatch(incrementCorrectAnswersCount());

		const answeredQuestion: AnsweredQuestion = {
			question: currentQuestion.question,
			wasAnsweredCorrectly,
		};

		dispatch(addAnsweredQuestion(answeredQuestion));

		setCurrentQuestionNumber((prevState) => prevState + 1);
	};

	return (
		<>
			<Text weight={500} size="lg">
				{currentQuestion.category}
			</Text>
			<Text weight={500} size="lg">
				{currentQuestion.question}
			</Text>
			<Text weight={500} size="lg">
				{`${currentQuestionNumber}/${quizQuestions.length}`}
			</Text>
			<Group>
				<Button variant="outline" onClick={() => handleOnClick(true)}>
					TRUE
				</Button>
				<Button variant="outline" onClick={() => handleOnClick(false)}>
					FALSE
				</Button>
			</Group>
		</>
	);
};

export default Quiz;
