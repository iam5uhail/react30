import React from "react";
import { useTheme } from "./ThemeContext";

const Theme = () => {
	const { theme, toggleTheme } = useTheme();
	const themeclass = theme ? "dark" : "light";
	return (
		<div>
			<label>
				<input type='checkbox' checked={theme} onChange={toggleTheme} />
				<div className={themeclass}>Dark Mode</div>
			</label>
		</div>
	);
};

export default Theme;
