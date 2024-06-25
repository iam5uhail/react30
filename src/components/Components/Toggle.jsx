import React, { useEffect, useState } from "react";

const Toggle = () => {
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		document.title = "Toggle";
	}, []);

	return (
		<div>
			<input type='checkbox' onChange={() => setToggle(!toggle)} />
			<span> {toggle ? "On" : "Off"}</span>
		</div>
	);
};

export default Toggle;
