// src/components/Header.js
import React, { useEffect, useState } from "react";
// import { getUser } from "../api/User"; // Assume this function fetches user info
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Header() {
	const [user, setUser] = useState(null);
	const navigate = useNavigate(); // Initialize useNavigate

	useEffect(() => {
		handleFetchUser();
	}, []);

	const handleFetchUser = async () => {
		// const response = await getUser();
		// if (response.status === 200) {
		// 	setUser(response.data.user);
		// }
	};

	const handleLogin = () => {
		navigate("/login"); // Navigate to the login route
	};

	const handleRegister = () => {
		navigate("/register"); // Navigate to the register route
	};

	return (
		<header>
			{user ? (
				<div>
					<img src={user.profilePicture} alt="Profile" />
					<span>{user.name}</span>
				</div>
			) : (
				<div>
					<button onClick={handleLogin}>Login</button>
					<button onClick={handleRegister}>Register</button>
				</div>
			)}
		</header>
	);
}

export default Header;
