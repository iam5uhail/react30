import React, { useEffect, useState } from "react";

const MultiState = () => {
	const [state, setState] = useState({
		count: 0,
		text: "Hello world",
		active: false,
	});

	const handlecount = () => {
		setState({ ...state, count: state.count + 1 });
	};

	const handletext = () => {
		setState({ ...state, text: "Goodbye world" });
	};

	const handletoggle = () => {
		setState({ ...state, active: !state.active });
	};

	useEffect(() => {
		document.title = "Multi States";
	}, []);

	return (
		<div>
			<h1>Multi States</h1>
			<p>Count:{state.count}</p>
			<p>Text:{state.text}</p>
			<p>Active:{state.active ? "true" : "false"}</p>

			<button onClick={handlecount}>Count</button>
			<button onClick={handletext}>Change Text</button>
			<button onClick={handletoggle}>Toggle Active</button>
		</div>
	);
};

export default MultiState;
