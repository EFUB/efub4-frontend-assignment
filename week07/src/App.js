import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import TodoPage from "./pages/TodoPage";
import PlaylistPage from "./pages/PlaylistPage";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;
function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TodoPage />} />
					<Route path="/playlist" element={<PlaylistPage />} />
					<Route
						path="*"
						element={
							<h1>
								<br />
								404 Not Found
							</h1>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
