import { useState, useEffect } from "react";
import { Login } from "../api/User";
import { Navigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

function LoginPage({ setCurrentUser }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [redirectToHome, setRedirectToHome] = useState(false);

	useEffect(() => {
		const storedEmail = localStorage.getItem("email");
		const storedPassword = localStorage.getItem("password");
		if (storedEmail) {
			setEmail(storedEmail);
		}
		if (storedPassword) {
			setPassword(storedPassword);
		}
	}, []);

	const handleLogin = async () => {
		const response = await Login(email, password);
		if (response.status === 200) {
			setCurrentUser(true);
			localStorage.setItem("token", response.data.token);
			setRedirectToHome(true);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.leftSide}>
				<h1 className={styles.header}>Already have an account?</h1>
				<p className={styles.subheader}>Your personal job finder is here</p>
				<input
					type="email"
					placeholder="Email"
					value={email}
					className={styles.input}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					className={styles.input}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className={styles.button} onClick={handleLogin}>
					Login
				</button>
				<div
					className={styles.signupRedirect}
					onClick={() => (window.location.href = "/signup")}
				>
					Don't have an account? Sign Up
				</div>
				{redirectToHome && <Navigate to="/" />}
			</div>
			<div className={styles.rightSide}>
				<h1>Your personal job finder</h1>
			</div>
		</div>
	);
}

export default LoginPage;
