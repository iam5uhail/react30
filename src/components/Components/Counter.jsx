import React, { useEffect, useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		document.title = "Counter";
	}, []);
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>+</button>
			<span> {count} </span>
			<button onClick={() => setCount(count - 1)}>-</button>
		</div>
	);
};

export default Counter;
