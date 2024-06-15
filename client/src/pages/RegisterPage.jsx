import { useState } from "react";
import { Register } from "../api/User";
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
			localStorage.setItem("email", email);
			localStorage.setItem("password", password);
			setShowLoginRedirect(true);
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
			{showLoginRedirect && <Navigate to="/login" />}
		</div>
	);
}

export default RegisterPage;
