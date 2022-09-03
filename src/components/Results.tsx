import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Title } from "@mantine/core";

import { RootState } from "../store";
import ResultsList from "./ResultsList";

const Results = () => {
	const navigate = useNavigate();
	const { answeredQuestions, correctAnswersCount, totalQuestionsCount } = useSelector(
		(state: RootState) => state.triviaReducer
	);

	return (
		<>
			<Title order={2} align="center">
				{`You Scored ${correctAnswersCount}/${totalQuestionsCount}`}
			</Title>
			<ResultsList answeredQuestions={answeredQuestions} />
			<Button onClick={() => navigate("/")} radius="md" size="md">
				PLAY AGAIN ?
			</Button>
		</>
	);
};

export default Results;
