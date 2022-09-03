import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Start />} />
					<Route path="quiz" element={<Quiz />} />
					<Route path="results" element={<Results />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
