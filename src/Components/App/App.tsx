import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Logic/users";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

const App: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		(async function () {
			const loginResult: string = await login("w@w", "w", dispatch);
			// loginResult == "ok" || error message
		})();
	}, []);

	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<Container />
			</BrowserRouter>
		</div>
	);
};

export default App;
