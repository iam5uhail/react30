import React, { createContext, useContext, useState } from "react";

const LocalContext = createContext();

export const useLocalContext = () => {
	return useContext(LocalContext);
};

export const LocalContextProvider = ({ children }) => {
	const [local, setLocal] = useState("en");

	const localString = {
		en: {
			greeting: "Hello",
			welcome: "Welcome to our website",
		},
		es: {
			greeting: "Hola",
			welcome: "Bienvenido a nuestro sitio web",
		},
	};

	return (
		<LocalContext.Provider value={{ local, setLocal, localString }}>
			{children}
		</LocalContext.Provider>
	);
};
