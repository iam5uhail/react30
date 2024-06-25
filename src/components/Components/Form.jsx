import React, { useEffect, useState } from "react";

const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [data, setData] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = { name, email, pass };
		setData([...data, formData]);
		console.log(data);
	};
	useEffect(() => {
		document.title = "Form";
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "5px",
					width: "300px",
				}}
			>
				<input
					placeholder='Name'
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					placeholder='Email'
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					placeholder='Password'
					type='password'
					value={pass}
					onChange={(e) => setPass(e.target.value)}
				/>
				<button type='submit'>Submit</button>
			</div>
			<div>
				Form Data:
				<ul>
					{data.map((item, index) => (
						<li key={index}>
							{`Name: ${item.name}, Email: ${item.email}, Password: ${item.pass}`}
						</li>
					))}
				</ul>
			</div>
		</form>
	);
};

export default Form;
