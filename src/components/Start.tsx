import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Alert, Button, Text, Title } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons";

import useGetQuizData from "../hooks/useGetQuizQuestions";
import { RootState } from "../store";

const Start = () => {
	const { isLoading, error } = useGetQuizData();
	const navigate = useNavigate();
	const { totalQuestionsCount } = useSelector((state: RootState) => state.triviaReducer);

	if (error) {
		return (
			<Alert icon={<IconAlertCircle size={16} />} title="Bummer!" color="red">
				Something went wrong!
				{error.message}
			</Alert>
		);
	}

	return (
		<>
			<Title order={2} align="center">
				Welcome to the Trivia Challenge!
			</Title>
			<Text weight={500} size="lg" align="center">
				You will be presented with
				{totalQuestionsCount || "..."}
				True or False questions.
			</Text>
			<Text weight={500} size="lg" align="center">
				Can you score 100%?
			</Text>
			<Button onClick={() => navigate("/quiz")} loading={isLoading} radius="md" size="md">
				BEGIN
			</Button>
		</>
	);
};

export default Start;
