/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import UserAvatar from "../assets/random_Avatar.jpg";

export const Header = ({ currentUser, setCurrentUser }) => {
	const navigate = useNavigate();

	return (
		<div className={styles.header}>
			<h1 className={styles.title}>Jobfinder</h1>
			{currentUser && (
				<div className={styles.userSection}>
					<button
						className={`${styles.button} ${styles.logoutButton}`}
						onClick={() => {
							setCurrentUser(false);
							localStorage.removeItem("token");
							navigate("/login");
						}}
					>
						Logout
					</button>
					<h4 className={styles.recruiterText}>Hello! Recruiter</h4>
					<img className={styles.avatar} src={UserAvatar} alt="User Avatar" />
				</div>
			)}
			{!currentUser && (
				<div className={styles.authButtons}>
					<button
						className={`${styles.button} ${styles.loginButton}`}
						onClick={() => {
							navigate("/login");
						}}
					>
						Login
					</button>
					<button
						className={`${styles.button} ${styles.registerButton}`}
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
