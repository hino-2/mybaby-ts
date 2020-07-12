import { IUser, IReduxActionUserInfo } from "../interfaces";

export const layoutMobile = () => {
	return {
		type: "MOBILE",
	};
};

export const userInfoAction = (user: IUser): IReduxActionUserInfo => {
	return {
		type: "USER_LOGIN",
		payload: user,
	};
};
