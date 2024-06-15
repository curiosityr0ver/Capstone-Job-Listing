import { useState } from "react";
import { Login, Register } from "../api/User";
import { Navigate } from "react-router-dom";

function RegisterPage() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [mobile, setMobile] = useState();
	const [password, setPassword] = useState();
	const [showLoginRedirect, setShowLoginRedirect] = useState(false);

	const handleRegister = async () => {
		const response = await Register(name, email, mobile, password);
		if (response.status === 201) {
			const loginResponse = await Login(email, password);
			if (loginResponse.status === 200) {
				const { data } = loginResponse;
				const { token } = data;
				localStorage.setItem("token", token);
				setShowLoginRedirect(true);
			}
		}
	};

	return (
		<div>
			<h1>Register</h1>
			<input
				type="text"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Mobile"
				value={mobile}
				onChange={(e) => setMobile(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleRegister}>Register</button>
			{showLoginRedirect && <Navigate to="/" />}
		</div>
	);
}

export default RegisterPage;
