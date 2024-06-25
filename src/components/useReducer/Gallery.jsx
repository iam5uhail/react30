import React, { useEffect, useReducer } from "react";
import img1 from "../../assets/images/images 1.jpg";
import img2 from "../../assets/images/images 2.jpg";
import img3 from "../../assets/images/images 3.jpg";

const initialState = {
	currentimgindex: 0,
};

const images = [img1, img2, img3];

const reducer = (state, action) => {
	switch (action.type) {
		case "previos":
			return {
				...state,
				currentimgindex: state.currentimgindex - 1,
			};
		case "next":
			return {
				...state,
				currentimgindex: state.currentimgindex + 1,
			};
		default:
			return state;
	}
};
const Gallery = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const currentimg = images[state.currentimgindex];

	useEffect(() => {
		document.title = "Reducer Gallery";
	}, []);
	return (
		<div>
			<h1>Gallery</h1>
			<div>
				<img src={currentimg} />
			</div>
			<div>
				<button
					onClick={() => dispatch({ type: "previous" })}
					disabled={state.currentimgindex === 0}
				>
					Previous
				</button>
				<button
					onClick={() => dispatch({ type: "next" })}
					disabled={state.currentimgindex === images.length - 1}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Gallery;
