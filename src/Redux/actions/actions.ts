import { User, ReduxActionUserInfo, ReduxActionIsMobile } from "../../interfaces";

export const layoutMobile = (): ReduxActionIsMobile => {
	return {
		type: "MOBILE",
		payload: false,
	};
};

export const userInfoAction = (user: User | null): ReduxActionUserInfo => {
	return {
		type: "USER_LOGIN",
		payload: user,
	};
};
