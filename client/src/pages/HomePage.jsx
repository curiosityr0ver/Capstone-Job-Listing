import React, { useEffect, useState } from "react";
import { fetchJobs } from "../api/Job";
import Header from "../components/Header";

function HomePage() {
	const [jobs, setJobs] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filters, setFilters] = useState({
		fullTime: false,
		partTime: false,
		remote: false,
	});
	const altJobIcon = "https://static.thenounproject.com/png/2343509-200.png";

	useEffect(() => {
		handleFetchJobs();
	}, []);

	const handleFetchJobs = async () => {
		const response = await fetchJobs();
		if (response.status === 200) {
			setJobs(response.data.jobs);
		}
	};

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleFilterChange = (event) => {
		setFilters({
			...filters,
			[event.target.name]: event.target.checked,
		});
	};

	// In the future, you would pass `filters` to your backend request.
	// const handleFetchJobs = async () => {
	// 	const response = await fetchJobs({ searchTerm, filters });
	// 	if (response.status === 200) {
	// 		setJobs(response.data.jobs);
	// 	}
	// };

	return (
		<div>
			<Header />
			<div>
				<input
					type="text"
					placeholder="Search jobs..."
					value={searchTerm}
					onChange={handleSearch}
				/>
				<div>
					<label>
						<input
							type="checkbox"
							name="fullTime"
							checked={filters.fullTime}
							onChange={handleFilterChange}
						/>
						Full Time
					</label>
					<label>
						<input
							type="checkbox"
							name="partTime"
							checked={filters.partTime}
							onChange={handleFilterChange}
						/>
						Part Time
					</label>
					<label>
						<input
							type="checkbox"
							name="remote"
							checked={filters.remote}
							onChange={handleFilterChange}
						/>
						Remote
					</label>
				</div>
			</div>
			<div>
				<h1>Homepage</h1>
				{jobs.map((job, index) => (
					<div key={index}>
						<h3>{job.companyName}</h3>
						<h4>{job.jobType}</h4>
						<img src={job.logoUrl} alt={altJobIcon} />
					</div>
				))}
			</div>
		</div>
	);
}

export default HomePage;
