import { IBackendResponse } from "../interfaces";

export const login = async (email: string, password: string): Promise<IBackendResponse> => {
	const url: string = "/DummyAPI/user.json";
	// const url: string = "/login";

	const response: Response = await fetch(url, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		// body: JSON.stringify({ email: email, password: password }),
	});

	const loginResult: IBackendResponse = await response.json();

	return loginResult;
};
