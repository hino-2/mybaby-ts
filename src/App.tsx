import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IBackendResponse } from "./interfaces";
import { login } from "./Logic/user-management";
import { userInfoAction } from "./actions";
import "./App.scss";

const App: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		(async function () {
			const loginResult: IBackendResponse = await login("w@w", "w");
			if (loginResult.data && "_id" in loginResult.data)
				dispatch(userInfoAction(loginResult.data));
			else alert(loginResult.error);
		})();
	}, []);

	return <div className="App"></div>;
};

export default App;
