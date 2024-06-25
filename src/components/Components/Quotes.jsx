import React, { useEffect } from "react";

const Quotes = () => {
	useEffect(() => {
		document.title = "Quotes";
	}, []);

	let quotes = ["hello 1", "hello2", "hello 3"];

	let qindex = Math.floor(Math.random() * quotes.length);

	let quote = quotes[qindex];

	return <div>{quote}</div>;
};

export default Quotes;
