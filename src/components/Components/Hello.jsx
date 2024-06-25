import React, { useEffect } from "react";

const Hello = () => {
	useEffect(() => {
		document.title = "Hello";
	}, []);
	return <div>Hello world</div>;
};

export default Hello;
