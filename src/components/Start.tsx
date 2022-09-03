import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Stack, Text } from "@mantine/core";
import { useGetQuizData } from "../hooks/useGetQuizQuestions";

const Start = () => {
	const { isLoading, error } = useGetQuizData();
	const navigate = useNavigate();
	return (
		<>
			<Text weight={500} size="lg">
				Welcome to the Trivia Challenge!
			</Text>
			<Text weight={500} size="lg">
				You will be presented with 10 True or False questions.
			</Text>
			<Text weight={500} size="lg">
				Can you score 100%?
			</Text>
			<Button onClick={() => navigate("/quiz")}>BEGIN</Button>
		</>
	);
};

export default Start;
