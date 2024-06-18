import { useEffect, useState } from "react";
import { fetchJobs, fetchJobsByQuery } from "../api/Job";
import { Header } from "../components/Header";
import { QueryWidget } from "../components/QueryWidget";
import { JobCard } from "../components/JobCard";

function HomePage() {
	const [jobs, setJobs] = useState([]);
	const [query, setQuery] = useState({
		title: "",
		skills: [],
	});

	useEffect(() => {
		handleFetchJobs();
	}, []);

	useEffect(() => {
		console.log(query);
	}, [query]);

	const handleFetchJobs = async () => {
		const response = await fetchJobsByQuery(query);

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
			<QueryWidget
				query={query}
				setQuery={setQuery}
				handleFetchJobs={handleFetchJobs}
			/>
			{jobs.map((job, index) => (
				<JobCard job={job} key={index} />
			))}
		</div>
	);
}

export default HomePage;
