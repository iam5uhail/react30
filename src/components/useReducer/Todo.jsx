import React, { useEffect, useReducer, useState } from "react";

const initialstate = {
	items: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "add":
			return {
				...state,
				items: [
					...state.items,
					{
						id: Date.now(),
						text: action.payload,
						completed: false,
					},
				],
			};
		case "delete":
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			};
		case "complete":
			return {
				...state,
				items: state.items.map((item) =>
					item.id === action.payload
						? { ...item, completed: !item.completed }
						: item
				),
			};
		default:
			return state;
	}
};

const Todo = () => {
	const [data, setData] = useState("");
	const [state, dispatch] = useReducer(reducer, initialstate);

	useEffect(() => {
		document.title = "Reducer Todo";
	}, []);

	return (
		<div>
			<h1>Use Reducer Todo</h1>

			<input type='text' onChange={(e) => setData(e.target.value)} />
			<button onClick={() => dispatch({ type: "add", payload: data })}>
				Add
			</button>

			{state.items.map((item) => (
				<div key={item.id}>
					<span
						style={{
							textDecoration: item.completed
								? "line-through"
								: "none",
						}}
						onClick={() =>
							dispatch({ type: "complete", payload: item.id })
						}
					>
						{item.text}
					</span>
					<button
						onClick={() =>
							dispatch({ type: "delete", payload: item.id })
						}
					>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default Todo;
