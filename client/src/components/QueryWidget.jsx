/* eslint-disable react/prop-types */
import skills from "../data/skills";
import styles from "./QueryWidget.module.css";

export const QueryWidget = ({ query, setQuery, handleFetchJobs }) => {
	const handleSkillChange = (skill) => {
		if (skill === "placeholder") {
			return;
		}
		setQuery((prevQuery) => ({
			...prevQuery,
			skills: prevQuery.skills.includes(skill)
				? prevQuery.skills
				: [...prevQuery.skills, skill],
		}));
	};

	const handleClearFilters = () => {
		setQuery({ title: "", skills: [] });
	};

	const handleTitleChange = (e) => {
		const newTitle = e.target.value;
		setQuery((prevQuery) => ({ ...prevQuery, title: newTitle }));
	};

	const handleRemoveSkill = (skillToRemove) => {
		setQuery((prevQuery) => ({
			...prevQuery,
			skills: prevQuery.skills.filter((skill) => skill !== skillToRemove),
		}));
	};

	return (
		<div className={styles.queryWidget}>
			<input
				type="text"
				placeholder="Type any job title"
				value={query.title}
				onChange={handleTitleChange}
				className={styles.input}
			/>
			<div className={styles.filterRow}>
				<div className={styles.skillsSelector}>
					<div className={styles.selectContainer}>
						<select
							onChange={(e) => handleSkillChange(e.target.value)}
							className={styles.select}
						>
							<option value="placeholder">Select Skill</option>
							{skills.map((skill, index) => (
								<option key={index} value={skill}>
									{skill}
								</option>
							))}
						</select>
					</div>
					<div className={styles.chipsContainer}>
						{query.skills.map((skill, index) => (
							<div key={index} className={styles.chip}>
								<div className={styles.chipText}>{skill}</div>
								<button
									onClick={() => handleRemoveSkill(skill)}
									className={styles.chipClose}
								>
									x
								</button>
							</div>
						))}
					</div>
				</div>
				<div className={styles.buttonContainer}>
					<button
						onClick={handleFetchJobs}
						className={`${styles.button} ${styles.applyButton}`}
					>
						Apply Filter
					</button>
					<button
						onClick={handleClearFilters}
						className={`${styles.button} ${styles.clearButton}`}
					>
						Clear
					</button>
				</div>
			</div>
		</div>
	);
};
