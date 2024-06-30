/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchJobsByQuery } from "../api/Job";
import { Header } from "../components/Header";
import { QueryWidget } from "../components/QueryWidget";
import { JobCard } from "../components/JobCard";
import styles from "./HomePage.module.css";

function HomePage({ currentUser, setCurrentUser }) {
	const [jobs, setJobs] = useState([]);
	const [query, setQuery] = useState({
		title: "",
		skills: [],
	});

	useEffect(() => {
		handleFetchJobs();
	}, []);

	const handleFetchJobs = async () => {
		const response = await fetchJobsByQuery(query);
		if (response.status === 200) {
			setJobs(response.data.jobs);
		}
	};

	return (
		<div className={styles.homePage}>
			<Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
			<div className={styles.content}>
				<QueryWidget
					query={query}
					setQuery={setQuery}
					handleFetchJobs={handleFetchJobs}
				/>
				<div className={styles.jobs}>
					{jobs.map((job, index) => (
						<JobCard job={job} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}

export default HomePage;
