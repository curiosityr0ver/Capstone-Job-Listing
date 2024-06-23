/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ChipsSelector from "../components/ChipsSelector";
import styles from "./CreateJobPage.module.css";
import { createJob } from "../api/Job";
import { set } from "mongoose";

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
		skills: [],
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

	const handleJobCreate = async () => {
		console.log(job);
		const response = await createJob(job);
		if (response.status === 201) {
			setJob({
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
				skills: [],
			});
			alert("Job added successfully");
		} else {
			alert("Error adding job");
		}
	};

	return (
		<div className={styles.body}>
			<h3>Add job description</h3>

			<div className={styles.inputElement}>
				<label>Company Name</label>
				<input
					type="text"
					value={job.companyName}
					onChange={(e) => setJob({ ...job, companyName: e.target.value })}
				/>
			</div>

			<div className={styles.inputElement}>
				<label>Add logo URL</label>
				<input
					type="text"
					value={job.logoUrl}
					onChange={(e) => setJob({ ...job, logoUrl: e.target.value })}
				/>
			</div>

			<div className={styles.inputElement}>
				<label>Job Position</label>
				<input
					type="text"
					value={job.title}
					onChange={(e) => setJob({ ...job, title: e.target.value })}
				/>
			</div>
			<div className={styles.inputElement}>
				<label>Duration</label>
				<input
					type="text"
					value={job.duration}
					onChange={(e) => setJob({ ...job, duration: e.target.value })}
				/>
			</div>

			<div className={styles.inputElement}>
				<label>Monthly Salary</label>
				<input
					type="text"
					value={job.salary}
					onChange={(e) => setJob({ ...job, salary: e.target.value })}
				/>
			</div>

			<div className={styles.inputElement}>
				<label>Job Type</label>
				<input
					type="text"
					value={job.jobType}
					onChange={(e) => setJob({ ...job, jobType: e.target.value })}
				/>
			</div>

			<div className={styles.inputElement}>
				<label>Remote/Office</label>
				<input
					type="text"
					value={job.locationType}
					onChange={(e) => setJob({ ...job, locationType: e.target.value })}
				/>
			</div>

			<div className={styles.inputElement}>
				<label>Location</label>
				<input
					type="text"
					value={job.location}
					onChange={(e) => setJob({ ...job, location: e.target.value })}
				/>
			</div>
			<div className={styles.inputElement}>
				<label>Job Description</label>
				<input
					type="text"
					value={job.description}
					onChange={(e) => setJob({ ...job, description: e.target.value })}
				/>
			</div>

			<div className={styles.inputElement}>
				<ChipsSelector
					selectedSkills={job.skills}
					setSelectedSkills={(skills) => setJob({ ...job, skills })}
				/>
			</div>
			<div className={styles.inputElement}>
				<label>Information: </label>
				<input
					type="text"
					value={job.information}
					onChange={(e) => setJob({ ...job, information: e.target.value })}
				/>
			</div>

			<button>Cancel</button>
			<button onClick={handleJobCreate}>+Add Job</button>
		</div>
	);
};

export default CreateJobPage;
