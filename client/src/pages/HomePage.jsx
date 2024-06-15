import { useEffect, useState } from "react";
import { fetchJobs } from "../api/Job";
import { Header } from "../components/Header";

function HomePage() {
	const [jobs, setJobs] = useState([]);
	const altJobIcon = "https://static.thenounproject.com/png/2343509-200.png";

	useEffect(() => {
		handleFetchJobs();
	}, []);

	const handleFetchJobs = async () => {
		const response = await fetchJobs();
		if (response.status == 200) {
			setJobs(response.data.jobs);
		}
	};

	useEffect(() => {
		console.log(jobs);
	}, [jobs]);

	return (
		<div>
			<Header />
			{jobs.map((job, index) => (
				<div key={index}>
					<h3>{job.companyName}</h3>
					<h4>{job.jobType}</h4>
					<img src={job.logoUrl} alt={altJobIcon} />
				</div>
			))}
		</div>
	);
}

export default HomePage;
