import { Baby, BackendResponse } from "../interfaces";
import { Dispatch } from "redux";
import { setCookie } from "./utils";
import { userInfoAction } from "../Redux/actions/actions";

export const addBabyToDB = async (
	userId: string,
	baby: Baby,
	dispatch: Dispatch<any>
): Promise<string> => {
	let result = {} as BackendResponse;

	try {
		const response: Response = await fetch("/newBaby", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id: userId, newBaby: baby }),
		});
		result = await response.json();

		if (result.data) {
			setCookie("mybaby-user", result.data);
			dispatch(userInfoAction(result.data));
		}

		return "ok";
	} catch (error) {
		console.log(error);
		return `${error}`;
	}
};

export const deleteBaby = async () => {
	// e.preventDefault()
	// const response = await fetch('/deleteBaby', {
	//     method: 'DELETE',
	//     headers: {
	//       'Accept': 'application/json',
	//       'Content-Type': 'application/json'
	//     },
	//     body: JSON.stringify({userId: userId, baby: baby})
	// })
	// if(response.status !== 200) {
	//     console.log(response.error)
	//     return
	// }
	// const newUser = await response.json()
	// console.log(newUser)
	// setUserCookie('mybaby-user', newUser)
	// dispatch(userLogin(newUser))
};
