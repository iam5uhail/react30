import React, { useEffect } from "react";
import { useAuth } from "./AuthContext";

const Authentication = () => {
	const { user, login, logout } = useAuth();
	useEffect(() => {
		document.title = "Context Auth";
	}, []);
	return (
		<div>
			<h1>Use Context Authentication</h1>
			{user ? (
				<div>
					<p>Welcome {user?.name}</p>
					<button onClick={logout}>logout</button>
				</div>
			) : (
				<button onClick={() => login({ name: "suhail" })}>login</button>
			)}
		</div>
	);
};

export default Authentication;
