import { FC } from "react";
import { List, ThemeIcon } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons";

import { AnsweredQuestion } from "../types/quizData";

interface ResultsListProps {
	answeredQuestions: AnsweredQuestion[];
}

const ResultsList: FC<ResultsListProps> = ({ answeredQuestions }) => {
	const getListItemIcon = (answer: boolean) => {
		if (answer) {
			return (
				<ThemeIcon color="teal" size={24} radius="xl">
					<IconCheck size={16} />
				</ThemeIcon>
			);
		}
		return (
			<ThemeIcon color="red" size={24} radius="xl">
				<IconX size={16} color="white" />
			</ThemeIcon>
		);
	};

	return (
		<List spacing="md" size="md" center p="md" sx={{ height: 450, overflow: "auto" }}>
			{answeredQuestions.map(({ question, wasAnsweredCorrectly }, index) => (
				<List.Item key={index} icon={getListItemIcon(wasAnsweredCorrectly)}>
					{question}
				</List.Item>
			))}
		</List>
	);
};

export default ResultsList;
