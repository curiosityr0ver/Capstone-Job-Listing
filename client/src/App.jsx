/* eslint-disable react/prop-types */
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import JobPage from "./pages/JobPage.jsx";
import CreateJobPage from "./pages/CreateJobPage.jsx";

import "./App.css";
function App() {
	const [currentUser, setCurrentUser] = useState(false);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/login"
					element={<LoginPage setCurrentUser={setCurrentUser} />}
				/>
				<Route
					path="/register"
					element={<RegisterPage setCurrentUser={setCurrentUser} />}
				/>
				<Route
					path="/"
					element={
						<HomePage
							currentUser={currentUser}
							setCurrentUser={setCurrentUser}
						/>
					}
				/>
				<Route
					path="/job/:id"
					element={
						<JobPage
							currentUser={currentUser}
							setCurrentUser={setCurrentUser}
						/>
					}
				/>
				<Route
					path="/create"
					element={<CreateJobPage currentUser={currentUser} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
