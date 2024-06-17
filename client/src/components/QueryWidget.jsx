import { useState } from "react";
import skills from "../data/skills";

export const QueryWidget = () => {
	const [title, setTitle] = useState();
	const [selectedSkills, setSelectedSkills] = useState([]);
	return (
		<div>
			<input
				type="text"
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<select>
				{skills.map((skill, index) => (
					<option key={index} value={skill}>
						{skill}
					</option>
				))}
			</select>
		</div>
	);
};
