import { BackendResponse } from "../interfaces";
import { Dispatch } from "redux";
import { userInfoAction } from "../Redux/actions";

export const login = async (
	email: string,
	password: string,
	dispatch: Dispatch<any>
): Promise<string> => {
	const url: string = "/DummyAPI/user.json";
	// const url: string = "/login";
	let loginResult = {} as BackendResponse;

	try {
		const response: Response = await fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			// body: JSON.stringify({ email: email, password: password }),
		});

		loginResult = await response.json();

		if (loginResult.data) dispatch(userInfoAction(loginResult.data));

		return "ok";
	} catch (error) {
		console.log(error);
		return `${error}`;
	}
};

export const logout = (dispatch: Dispatch<any>): void => {
	dispatch(userInfoAction(null));
};
