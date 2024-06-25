import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [data, setData] = useState([]);
	const [toggle, setToggle] = useState(true);
	const [loginSuccess, setLoginSuccess] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (toggle) {
			// Register logic
			let existingUser = data.find(
				(user) => user.name === name && user.password === password
			);
			if (existingUser) {
				alert("User already exists with the same name and password!");
			} else {
				let newUser = { name, email, password };
				setData([...data, newUser]);
				setName("");
				setEmail("");
				setPassword("");
			}
		} else {
			// Login logic
			let existingUser = data.find(
				(user) => user.name === name && user.password === password
			);
			if (existingUser) {
				setLoginSuccess(true);
			} else {
				alert("Login failed. Please check your credentials.");
			}
		}
	};

	useEffect(() => {
		document.title = "Registration";
		console.log(data);
	}, [data]);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "80vh",
				flexDirection: "column",
			}}
		>
			{toggle ? (
				<>
					<h1>Registration</h1>
					<form
						onSubmit={handleSubmit}
						style={{
							display: "flex",
							gap: "10px",
							flexDirection: "column",
							width: "300px",
						}}
					>
						<input
							type='text'
							value={name}
							placeholder='name'
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type='email'
							value={email}
							placeholder='email'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type='password'
							value={password}
							placeholder='password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type='submit'>Register</button>
					</form>
				</>
			) : (
				<>
					<h1>Login</h1>
					<form
						onSubmit={handleSubmit}
						style={{
							display: "flex",
							gap: "10px",
							flexDirection: "column",
							width: "300px",
						}}
					>
						<input
							type='text'
							value={name}
							placeholder='name'
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type='password'
							value={password}
							placeholder='password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type='submit'>Login</button>
					</form>
				</>
			)}
			<Link onClick={() => setToggle(!toggle)}>
				{toggle ? "Login" : "Register"}
			</Link>
			{loginSuccess && <p>Login successful!</p>}
			<ol>
				{data.map((i, index) => (
					<li key={index}>
						{i.name} - {i.email} - {i.password}
					</li>
				))}
			</ol>
		</div>
	);
};

export default Registration;
