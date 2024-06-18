/* eslint-disable react/prop-types */
import skills from "../data/skills";

export const QueryWidget = ({ query, setQuery, handleFetchJobs }) => {
	const handleSkillChange = (skill) => {
		if (skill === "placeholder") {
			return;
		}
		if (!query.skills.includes(skill)) {
			setQuery({ ...query, skills: [...query.skills, skill] });
		}
	};

	const handleClearFilters = () => {
		setQuery({ title: "", skills: [] });
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Title"
				value={query.title}
				onChange={(e) => setQuery({ ...query, title: e.target.value })}
			/>
			<select onChange={(e) => handleSkillChange(e.target.value)}>
				<option value="placeholder">Select Skill</option>
				{skills.map((skill, index) => (
					<option key={index} value={skill}>
						{skill}
					</option>
				))}
			</select>

			<button
				onClick={() => {
					handleFetchJobs();
				}}
			>
				Apply Filters
			</button>
			<button onClick={() => handleClearFilters()}>Clear</button>
		</div>
	);
};
