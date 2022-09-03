import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import App from "./App";
import { store } from "./store";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<MantineProvider withGlobalStyles withNormalizeCSS>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</MantineProvider>
		</Provider>
	</React.StrictMode>
);
