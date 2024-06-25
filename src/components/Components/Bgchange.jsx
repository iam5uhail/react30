import React, { useEffect, useState } from "react";

const Bgchange = () => {
	const [color, setColor] = useState("red");

	useEffect(() => {
		document.title = "Bgchange";
	}, []);

	const handlecolor = () => {
		let colors = {
			red: Math.floor(Math.random() * 256),
			green: Math.floor(Math.random() * 256),
			blue: Math.floor(Math.random() * 256),
		};
		let newColor = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
		setColor(newColor);
	};
	return (
		<div>
			<div
				onClick={handlecolor}
				style={{
					height: "300px",
					width: "300px",
					cursor: "pointer",
					backgroundColor: `${color}`,
				}}
			></div>
		</div>
	);
};

export default Bgchange;
