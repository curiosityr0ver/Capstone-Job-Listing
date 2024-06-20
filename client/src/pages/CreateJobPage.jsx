/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const CreateJobPage = ({ currentUser }) => {
	const validJobTypes = ["Full-Time", "Part-Time", "Internship"];
	const validLocationTypes = ["On-Site", "Remote", "Hybrid"];

	const [job, setJob] = useState({
		companyName: "",
		title: "",
		description: "",
		logoUrl: "",
		jobType: "",
		salary: "",
		location: "",
		duration: "",
		locationType: "",
		information: "",
		skills: "",
	});

	const handleJobTypeChange = (value) => {
		if (validJobTypes.includes(value)) {
			setJob({ ...job, jobType: value });
		}
	};

	const handleLocationTypeChange = (value) => {
		if (validLocationTypes.includes(value)) {
			setJob({ ...job, locationType: value });
		}
	};

	useEffect(() => {
		console.log(job);
	}, [job]);

	return (
		<div>
			<h3>Add job description</h3>

			<label>Company Name</label>
			<input
				type="text"
				value={job.companyName}
				onChange={(e) => setJob({ ...job, companyName: e.target.value })}
			/>

			<label>Title</label>
			<input
				type="text"
				value={job.title}
				onChange={(e) => setJob({ ...job, title: e.target.value })}
			/>

			<label>Description</label>
			<input
				type="text"
				value={job.description}
				onChange={(e) => setJob({ ...job, description: e.target.value })}
			/>

			<label>Logo URL</label>
			<input
				type="text"
				value={job.logoUrl}
				onChange={(e) => setJob({ ...job, logoUrl: e.target.value })}
			/>

			<label>Job Type</label>
			<select
				value={job.jobType}
				onChange={(e) => handleJobTypeChange(e.target.value)}
			>
				<option>Select Job Type</option>
				{validJobTypes.map((type, index) => {
					return <option key={index}>{type}</option>;
				})}
			</select>

			<label>Salary</label>
			<input
				type="number"
				value={job.salary}
				onChange={(e) => setJob({ ...job, salary: e.target.value })}
			/>

			<label>Location</label>
			<input
				type="text"
				value={job.location}
				onChange={(e) => setJob({ ...job, location: e.target.value })}
			/>

			<label>Duration</label>
			<input
				type="text"
				value={job.duration}
				onChange={(e) => setJob({ ...job, duration: e.target.value })}
			/>

			<label>Location Type</label>
			<select
				value={job.locationType}
				onChange={(e) => handleLocationTypeChange(e.target.value)}
			>
				<option>Select Location Type</option>
				{validLocationTypes.map((type, index) => {
					return <option key={index}>{type}</option>;
				})}
			</select>

			<label>Information</label>
			<input
				type="text"
				value={job.information}
				onChange={(e) => setJob({ ...job, information: e.target.value })}
			/>

			<button>Cancel</button>
			<button>+Add Job</button>
		</div>
	);
};

export default CreateJobPage;
