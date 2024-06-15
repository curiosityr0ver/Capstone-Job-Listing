import { useState, useEffect } from "react";
import { Login } from "../api/User";
import { Navigate } from "react-router-dom";

function LoginPage() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [redirectToHome, setRedirectToHome] = useState(false);

	useEffect(() => {
		const storedEmail = localStorage.getItem("email");
		const storedPassword = localStorage.getItem("password");
		console.log(storedEmail, storedPassword);
		if (storedEmail) {
			setEmail(storedEmail);
		}
		if (storedPassword) {
			setPassword(storedPassword);
		}
	}, []);

	const handleLogin = async () => {
		const response = await Login(email, password);
		console.log(response);
		if (response.status == 200) {
			localStorage.setItem("token", response.data.token);
			setRedirectToHome(true);
		}
	};

	useEffect(() => {
		console.log(redirectToHome);
	}, [redirectToHome]);

	return (
		<div>
			<h1>Login</h1>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleLogin}>Login</button>
			{redirectToHome && <Navigate to="/" />}
		</div>
	);
}

export default LoginPage;
