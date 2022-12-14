import { Routes, Route } from "react-router-dom";
import { Center } from "@mantine/core";

import Layout from "./components/Layout";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

const App = () => {
	return (
		<div className="App">
			<Center sx={{ width: "100%", height: "100vh", backgroundColor: "#181D2A" }}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Start />} />
						<Route path="quiz" element={<Quiz />} />
						<Route path="results" element={<Results />} />
					</Route>
				</Routes>
			</Center>
		</div>
	);
};

export default App;
