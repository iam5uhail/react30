import React, { useEffect, useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };
		case "decrement":
			return { count: state.count - 1 };
		case "reset":
			return { count: 0 };
		default:
			return state;
	}
};

const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	useEffect(() => {
		document.title = "Reducer Counter";
	}, []);
	return (
		<div>
			<h1>Use Reducer Counter</h1>

			<p>Count: {state.count}</p>
			<button onClick={() => dispatch({ type: "increment" })}>+</button>
			<button onClick={() => dispatch({ type: "decrement" })}>-</button>
			<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
		</div>
	);
};

export default Counter;
