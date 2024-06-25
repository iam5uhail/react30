import React, { useEffect, useState } from "react";

const Todo = () => {
	const [text, setText] = useState("");
	const [data, setData] = useState([]);

	const handleadd = (e) => {
		if (text !== "") {
			setData([...data, text]);
			setText("");
		}
	};

	const handleDelete = (item) => {
		setData(data.filter((i) => i !== item));
	};

	useEffect(() => {
		document.title = "Todo";
	}, []);
	return (
		<div>
			<input
				type='text'
				placeholder='add text'
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={handleadd}>Add</button>
			<div>
				{data.map((item, index) => (
					<li key={index}>
						{item}
						<button onClick={() => handleDelete(item)}>del</button>
					</li>
				))}
			</div>
		</div>
	);
};

export default Todo;
