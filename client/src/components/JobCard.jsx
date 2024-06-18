/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export const JobCard = ({ job }) => {
	const navigate = useNavigate();
	const {
		title,
		logoUrl,
		salary,
		location,
		duration,
		locationType,
		jobType,
		skills,
		_id,
	} = job;
	const altJobIcon = "https://static.thenounproject.com/png/2343509-200.png";

	console.log(job);
	return (
		<div>
			{title}
			<img src={logoUrl} alt={altJobIcon} />
			{salary}
			{location}
			{duration}
			{locationType}
			{jobType}
			{skills.map((skill, index) => {
				return <div key={index}>{skill}</div>;
			})}
			<button
				onClick={() => {
					navigate(`/job/${_id}`);
				}}
			>
				View Details
			</button>
		</div>
	);
};
