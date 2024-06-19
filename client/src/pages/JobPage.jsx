import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { fetchJobById } from "../api/Job";

const JobPage = ({ currentUser, setCurrentUser }) => {
	const [job, setJob] = useState();
	const jobID = window.location.pathname.split("/").pop();

	useEffect(() => {
		fetchJob();
	}, []);

	useEffect(() => {
		if (job) {
			timeElapsed(job.createdAt);
		}
	}, [job]);

	const timeElapsed = (createdAt) => {
		const currentTime = new Date();
		const createdAtTime = new Date(createdAt);
		const difference = currentTime - createdAtTime;
		return difference;
		// return "1 day ago/20 minutes ago/3 weeks ago";
	};

	const fetchJob = async () => {
		const response = await fetchJobById(jobID);
		if (response.status == 200) {
			setJob(response.data.job);
			console.log(response.data.job);
		}
	};

	return (
		<div>
			<Header />

			{job && (
				<div>
					{/* First Row */}
					<p>{timeElapsed(job.createdAt)}</p>
					<p>{job.jobType}</p>
					<img src={job.logoUrl} alt="job logo" />
					<p>{job.companyName}</p>

					{/* Second Row */}
					<h4>{job.title}</h4>
					<button>Edit Job</button>
					<p>{job.location}</p>

					{/* Third Row */}
					<p>Stipend</p>
					<h2>{job.salary}</h2>
					<p>Duration</p>

					{/* About Company */}
					{/*About Job */}
					{job.skills.map((skill, index) => {
						return <div key={index}>{skill}</div>;
					})}
					{/*Additional Information */}
				</div>
			)}
		</div>
	);
};

export default JobPage;
