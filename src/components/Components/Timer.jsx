import React, { useEffect, useState } from "react";

const Timer = () => {
	const [sec, setSec] = useState(10);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		let valid;
		if (isActive && sec > 0) {
			valid = setInterval(() => {
				setSec((sec) => sec - 1);
			}, 1000);
		}
		return () => {
			clearInterval(valid);
		};
	}, [isActive, sec]);

	const handleStart = () => {
		setIsActive(true);
	};

	const handleStop = () => {
		setIsActive(false);
	};

	useEffect(() => {
		document.title = "Timer";
	}, []);
	return (
		<div>
			<div>Time Left: {sec}</div>
			<div style={{ display: "flex", gap: "20px" }}>
				<button onClick={handleStart}>Start</button>
				<button onClick={handleStop}>Stop</button>
			</div>
		</div>
	);
};

export default Timer;
