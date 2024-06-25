import React, { useEffect, useState } from "react";

const item = [
	"item1",
	"item2",
	"item3",
	"item4",
	"item5",
	"item6",
	"item7",
	"item8",
	"item9",
	"item10",
	"item11",
];
let itemsperpage = 5;
const Pagination = () => {
	const [currentpage, setCurrentPage] = useState(1);

	const indexOFLastItem = currentpage * itemsperpage;
	const indexOFFirstItem = indexOFLastItem - itemsperpage;
	const currentItems = item.slice(indexOFFirstItem, indexOFLastItem);

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(item.length / itemsperpage); i++) {
		pageNumbers.push(i);
	}

	useEffect(() => {
		document.title = "Pagination";
	}, []);

	return (
		<div>
			<ul>
				{currentItems.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			{pageNumbers.map((number) => (
				<button key={number} onClick={() => setCurrentPage(number)}>
					{number}
				</button>
			))}
		</div>
	);
};

export default Pagination;
