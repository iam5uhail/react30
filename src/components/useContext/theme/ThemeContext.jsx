import React, { createContext, useContext, useState } from "react";

const Themecontext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(false);
	const toggleTheme = () => {
		setTheme((prevMode) => !prevMode);
	};
	return (
		<Themecontext.Provider value={{ theme, toggleTheme }}>
			{children}
		</Themecontext.Provider>
	);
};

const useTheme = () => {
	return useContext(Themecontext);
};

export { ThemeProvider, useTheme };
