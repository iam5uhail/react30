import React, { useEffect, useState } from "react";

const items = ["item1", "item2", "item3", "another1", "another2", "another3"];
const SearchFilter = () => {
	const [searchitem, setSearchitem] = useState("");
	const filterItems = items.filter((item) =>
		item.toLocaleLowerCase().includes(searchitem.toLocaleLowerCase())
	);
	useEffect(() => {
		document.title = "SearchFilter";
	}, []);
	return (
		<div>
			<input
				type='text'
				placeholder='search'
				onChange={(e) => setSearchitem(e.target.value)}
			/>
			<ul>
				{filterItems.map((item) => (
					<li>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default SearchFilter;
