import React, { useEffect, useState } from "react";

const ColorPicker = () => {
	const [color, setColor] = useState("red");

	useEffect(() => {
		document.title = "Colorpicker";
	}, []);

	const handlechange = (e) => {
		setColor(e.target.value);
	};
	return (
		<div>
			<div
				style={{
					backgroundColor: `${color}`,
					height: "300px",
					width: "300px",
				}}
			></div>
			<input type='color' onChange={handlechange} />
		</div>
	);
};

export default ColorPicker;
