import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
	const [openSection, setOpenSection] = useState(null);
	const navbarRef = useRef(null);

	const navbar = [
		{
			label: "Components",
			items: [
				{ label: "Hello", path: "/hello" },
				{ label: "Counter", path: "/counter" },
				{ label: "Form", path: "/form" },
				{ label: "Toggle", path: "/toggle" },
				{ label: "Api", path: "/api" },
				{ label: "Timer", path: "/timer" },
				{ label: "Todo", path: "/todo" },
				{ label: "Bgchange", path: "/bgChange" },
				{ label: "Quotes", path: "/quotes" },
				{ label: "FileUpload", path: "/fileupload" },
				{ label: "Registration", path: "/registration" },
				{ label: "Weather", path: "/weather" },
				{ label: "Search", path: "/search" },
				{ label: "Pagination", path: "/pagination" },
				{ label: "ColorPicker", path: "/colorPicker" },
				{ label: "Hamburger", path: "/hamburger" },
				{ label: "Drag", path: "/drag" },
				{ label: "MultiApi", path: "/multiapi" },
				{ label: "MultiState", path: "/multistate" },
			],
		},
		{
			label: "useReducer",
			items: [
				{ label: "Counter", path: "/usecounter" },
				{ label: "Todo", path: "/usetodo" },
				{ label: "Pagination", path: "/usepagination" },
				{ label: "Gallery", path: "/usegallery" },
			],
		},
		{
			label: "useContext",
			items: [
				{ label: "Themes", path: "/themes" },
				{ label: "Auth", path: "/useauth" },
				{ label: "Translate", path: "/translate" },
			],
		},
		{
			label: "Redux",
			items: [{ label: "Shop", path: "/shoppingcart" }],
		},
	];

	const handleSectionClick = (index) => {
		setOpenSection(openSection === index ? null : index);
	};

	const closeDropdown = () => {
		setOpenSection(null);
	};

	const handleItemClick = () => {
		setOpenSection(null);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				navbarRef.current &&
				!navbarRef.current.contains(event.target)
			) {
				closeDropdown();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className='navbar-fixed'>
			<div className='navbar-container' ref={navbarRef}>
				{navbar.map((section, index) => (
					<div key={index} className='navbar-section'>
						<div
							className='navbar-section-label'
							onClick={() => handleSectionClick(index)}
						>
							{section.label}
						</div>
						{openSection === index && (
							<div className='navbar-dropdown'>
								{section.items.map((item, itemIndex) => (
									<Link
										key={itemIndex}
										to={item.path}
										className='navbar-dropdown-item'
										onClick={handleItemClick}
									>
										{item.label}
									</Link>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Navbar;
