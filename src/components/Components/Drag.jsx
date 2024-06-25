import React, { useEffect, useReducer } from "react";

const initialState = {
	left: 0,
	top: 60,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "move":
			return {
				...state,
				left: action.payload.left,
				top: action.payload.top,
			};
		default:
			return state;
	}
};

const Drag = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [isDragging, setIsDragging] = React.useState(false);
	const [initialPosition, setInitialPosition] = React.useState({
		x: 0,
		y: 0,
	});

	const handleMouseDown = (e) => {
		setIsDragging(true);
		setInitialPosition({
			x: e.clientX - state.left,
			y: e.clientY - state.top,
		});
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleMouseMove = (e) => {
		if (isDragging) {
			const left = e.clientX - initialPosition.x;
			const top = e.clientY - initialPosition.y;
			dispatch({ type: "move", payload: { left, top } });
		}
	};

	useEffect(() => {
		document.title = "Drag";
	}, []);

	return (
		<div>
			<div
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseMove={handleMouseMove}
				style={{
					position: "relative",
					left: state.left,
					top: state.top,
					cursor: "move",
				}}
			>
				<div
					style={{
						width: "100px",
						height: "100px",
						backgroundColor: "red",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "white",
					}}
				>
					Drag Me
				</div>
			</div>
		</div>
	);
};

export default Drag;
