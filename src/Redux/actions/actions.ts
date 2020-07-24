import { User, ReduxActionUserInfo, ReduxActionIsMobile } from "../../interfaces";

export const PUT_DATA: string = "PUT_DATA";
export const LOAD_DATA: string = "LOAD_DATA";

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

export const putData = (data: any) => {
	return {
		type: PUT_DATA,
		payload: data,
	};
};

export const loadData = () => {
	return {
		type: LOAD_DATA,
	};
};
