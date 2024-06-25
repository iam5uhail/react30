import axios from "axios";
import React, { useEffect, useState } from "react";

const Api = () => {
	const [datas, setDatas] = useState([]);
	const [datas2, setDatas2] = useState([]);
	useEffect(() => {
		document.title = "Api";

		const fetch = async () => {
			const res = await axios.get(
				"https://jsonplaceholder.typicode.com/todos"
			);
			setDatas(res.data.slice(0, 10));
		};
		fetch();
	}, []);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((res) => res.json())
			.then((data) => setDatas2(data.slice(0, 10)));
	}, []);

	return (
		<>
			<div>
				{datas.map((i) => (
					<li>{i.title}</li>
				))}
			</div>
			<div>
				{datas2.map((i) => (
					<li>{i.title}</li>
				))}
			</div>
		</>
	);
};

export default Api;
