import axios from "axios";
import React, { useEffect, useState } from "react";

const MultiApi = () => {
	const [data, setData] = useState([]);
	const [data2, setData2] = useState([]);
	useEffect(() => {
		document.title = "MultiApi";
		axios
			.get(`https://jsonplaceholder.typicode.com/todos/1`)
			.then((response) => {
				console.log(response.data);
				setData(response.data);
			})
			.catch((error) => {
				console.log("Error", error);
			});

		axios
			.get(`https://jsonplaceholder.typicode.com/todos/2`)
			.then((response) => {
				console.log(response.data);
				setData2(response.data);
			})
			.catch((error) => {
				console.log("Error", error);
			});
	}, []);
	return <div>MultiApi</div>;
};

export default MultiApi;
