import React, { useEffect, useState } from "react";
const Hamburger = () => {
	const [open, setOpen] = useState(false);

	const togglemenu = () => {
		setOpen(!open);
	};

	useEffect(() => {
		document.title = "Hamburger";
	}, []);
	return (
		<div>
			<button className='menu-icon' onClick={togglemenu}>
				\\\
			</button>
			<ul className={`menu ${open ? "open" : ""}`}>
				<li>Home</li>
				<li>About</li>
				<li>Services</li>
				<li>Contact</li>
			</ul>
		</div>
	);
};

export default Hamburger;
