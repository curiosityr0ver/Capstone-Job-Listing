import UserAvatar from "../assets/random_Avatar.jpg";

export const Header = ({ userDetails }) => {
	return (
		<div>
			<h1>Jobfinder</h1>
			{userDetails && (
				<div>
					<img src={UserAvatar} alt="" />
				</div>
			)}
			{!userDetails && (
				<div>
					<button>Login</button>
					<button>Register</button>
				</div>
			)}
		</div>
	);
};
