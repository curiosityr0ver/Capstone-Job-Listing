import { useState, useEffect } from "react";
import React from "react";
import styles from "./ChipsSelector.module.css";

const ChipsSelector = ({ selectedSkills, setSelectedSkills }) => {
	const [currentSkill, setCurrentSkill] = useState("");
	const defaultSkills = ["React", "Node", "Express", "JavaScript"];

	const handleAddSkill = (skill) => {
		setCurrentSkill(skill);
	};

	const handleOnKeyDown = (e) => {
		if (e.key == "Enter") {
			if (selectedSkills.includes(currentSkill.trim())) {
				return;
			}
			setSelectedSkills([...selectedSkills, currentSkill.trim()]);
			setCurrentSkill(null);
		}
	};

	const suggestSkills = () => {
		if (!currentSkill) {
			return [];
		}
		return defaultSkills.filter((skill) => {
			return skill.toLowerCase().includes(currentSkill.toLowerCase());
		});
	};

	useEffect(() => {
		// console.log(currentSkill);
		// console.log(selectedSkills);
		// console.log(suggestSkills());
	}, [selectedSkills, currentSkill]);

	return (
		<div>
			<label>Skills Required: </label>
			{suggestSkills().map((skill, index) => (
				<button key={index} onClick={() => handleAddSkill(skill)}>
					{skill}
				</button>
			))}

			<input
				type="text"
				value={currentSkill}
				onChange={(e) => handleAddSkill(e.target.value)}
				onKeyDown={handleOnKeyDown}
				className={styles.inputBar}
			/>

			<div className={styles.chipsContainer}>
				{selectedSkills?.map((skill, index) => {
					return (
						<div key={index} className={styles.chip}>
							{skill}
							<div
								className={styles.close}
								onClick={() => {
									setSelectedSkills(selectedSkills.filter((s) => s !== skill));
								}}
							>
								x
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ChipsSelector;
