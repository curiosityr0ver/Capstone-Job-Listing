/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./JobCard.module.css";

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

	return (
		<div className={styles.jobCard}>
			<img src={logoUrl || altJobIcon} alt={title} className={styles.logo} />
			<div className={styles.jobInfo}>
				<div className={styles.jobTitle}>{title}</div>
				<div className={styles.jobDetails}>
					<span>{duration}</span>
					<span>{salary}</span>
					<span>{location}</span>
					<span>{locationType}</span>
					<span>{jobType}</span>
				</div>
			</div>
			<div className={styles.rightSection}>
				<div className={styles.skills}>
					{skills.map((skill, index) => (
						<div key={index} className={styles.skill}>
							{skill}
						</div>
					))}
				</div>
				<button
					className={styles.viewDetailsButton}
					onClick={() => navigate(`/job/${_id}`)}
				>
					View Details
				</button>
			</div>
		</div>
	);
};
