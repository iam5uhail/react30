import React, { useEffect, useReducer } from "react";

const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);

const itemsperpage = 5;

const initialstate = {
	currentPage: 1,
	totalitem: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "set total item":
			return { ...state, totalitem: action.payload };
		case "next":
			return { ...state, currentPage: state.currentPage + 1 };
		case "back":
			return { ...state, currentPage: state.currentPage - 1 };

		default:
			return state;
	}
};

const Pagination = () => {
	const [pagination, dispatch] = useReducer(reducer, initialstate);

	useEffect(() => {
		document.title = "Reducer Pagination";
		dispatch({
			type: "set total item",
			payload: data.length,
		});
	}, []);

	const startindex = (pagination.currentPage - 1) * itemsperpage;
	const endindex = startindex + itemsperpage;

	const displayitems = data.slice(startindex, endindex);

	return (
		<div>
			<h1>Use Reducer Pagination</h1>
			<ul>
				{displayitems.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			<div>
				<button
					onClick={() => dispatch({ type: "back" })}
					disabled={pagination.currentPage === 1}
				>
					Previous
				</button>
				<button
					onClick={() => dispatch({ type: "next" })}
					disabled={
						pagination.currentPage ===
						Math.ceil(data.length / itemsperpage)
					}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Pagination;
