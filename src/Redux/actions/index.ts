import { User, IReduxActionUserInfo } from "../../interfaces";

export const layoutMobile = () => {
	return {
		type: "MOBILE",
	};
};

export const userInfoAction = (user: User | null): IReduxActionUserInfo => {
	return {
		type: "USER_LOGIN",
		payload: user,
	};
};
