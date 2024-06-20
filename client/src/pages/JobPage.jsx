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

	const timeElapsedPretty = (createdAt) => {
		const currentTime = new Date();
		const createdAtTime = new Date(createdAt);
		let differenceInMillis = currentTime - createdAtTime;
		differenceInMillis = 21000000000;

		const seconds = Math.floor(differenceInMillis / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);
		const weeks = Math.floor(days / 7);

		if (weeks > 0) {
			return weeks === 1 ? "1w ago" : `${weeks}w ago`;
		} else if (days > 0) {
			return days === 1 ? "1day ago" : `${days}days ago`;
		} else if (hours > 0) {
			return hours === 1 ? "1hr ago" : `${hours}hrs ago`;
		} else if (minutes > 0) {
			return minutes === 1 ? "1min ago" : `${minutes}min ago`;
		} else {
			return seconds === 1 ? "1sec ago" : `${seconds}sec ago`;
		}
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
					<p>{timeElapsedPretty(job.createdAt)}</p>
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
				</div>
			)}
		</div>
	);
};

export default JobPage;
