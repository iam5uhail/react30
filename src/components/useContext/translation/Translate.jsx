import React, { useEffect } from "react";
import { useLocalContext } from "./TransContext";

const Translate = () => {
	const { local, setLocal, localString } = useLocalContext();

	useEffect(() => {
		document.title = "Context Translator";
	}, []);
	const handleLocal = (newLocal) => {
		setLocal(newLocal);
	};

	return (
		<div>
			<h1>{localString[local].greeting}</h1>
			<p>{localString[local].welcome}</p>
			<button onClick={() => handleLocal("en")}>English</button>
			<button onClick={() => handleLocal("es")}>Español</button>
		</div>
	);
};

export default Translate;
