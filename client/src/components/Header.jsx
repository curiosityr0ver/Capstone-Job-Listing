/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import UserAvatar from "../assets/random_Avatar.jpg";

export const Header = ({ currentUser, setCurrentUser }) => {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Jobfinder</h1>
			{currentUser && (
				<div>
					<button
						onClick={() => {
							setCurrentUser(false);
							localStorage.removeItem("token");
							navigate("/login");
						}}
					>
						Logout
					</button>
					<h4>Hello! Recruiter</h4>
					<img src={UserAvatar} alt="" />
				</div>
			)}
			{!currentUser && (
				<div>
					<button
						onClick={() => {
							navigate("/login");
						}}
					>
						Login
					</button>
					<button
						onClick={() => {
							navigate("/register");
						}}
					>
						Register
					</button>
				</div>
			)}
		</div>
	);
};
