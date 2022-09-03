import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Container, Group, Paper, RingProgress, Text, Title } from "@mantine/core";

import { RootState } from "../store";
import { addAnsweredQuestion, incrementCorrectAnswersCount } from "../features/trivia/triviaSlice";
import { AnsweredQuestion } from "../types/quizData";

const HUNDRED_PERCENT = 100;

const Quiz = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { quizQuestions, totalQuestionsCount } = useSelector((state: RootState) => state.triviaReducer);

	const [currentQuestionStepNumber, setCurrentQuestionStepNumber] = useState(1);

	const handleOnClick = (userAnswer: boolean) => {
		if (currentQuestionStepNumber === totalQuestionsCount) navigate("/results");
		const wasAnsweredCorrectly = userAnswer === currentQuestion.correct_answer;

		if (wasAnsweredCorrectly) dispatch(incrementCorrectAnswersCount());

		const answeredQuestion: AnsweredQuestion = {
			question: currentQuestion.question,
			wasAnsweredCorrectly,
		};

		dispatch(addAnsweredQuestion(answeredQuestion));

		setCurrentQuestionStepNumber((prevQuestionNumber) => prevQuestionNumber + 1);
	};

	const currentQuestion = quizQuestions[currentQuestionStepNumber - 1];
	const currentProgressInPercentage = (HUNDRED_PERCENT / totalQuestionsCount) * currentQuestionStepNumber;

	return (
		<>
			<Title order={2} sx={{ height: 80 }} align="center">
				{currentQuestion.category}
			</Title>
			<Container sx={{ height: 160 }} p="xs">
				<Paper shadow="xl" radius="lg" p="lg" sx={{ minWidth: 288 }}>
					<Text color={"dark"}>{currentQuestion.question}</Text>
				</Paper>
			</Container>

			<RingProgress
				size={180}
				thickness={20}
				roundCaps
				sections={[{ value: currentProgressInPercentage, color: "blue" }]}
				sx={{ height: 120 }}
				label={
					<Text color="blue" weight={700} align="center" size="xl">
						{`${currentQuestionStepNumber}/${totalQuestionsCount}`}
					</Text>
				}
			/>
			<Group sx={{ height: 60 }}>
				<Button variant="outline" onClick={() => handleOnClick(false)} radius="md" size="md" color="red">
					FALSE
				</Button>
				<Button variant="outline" onClick={() => handleOnClick(true)} radius="md" size="md" color="green">
					TRUE
				</Button>
			</Group>
		</>
	);
};

export default Quiz;
