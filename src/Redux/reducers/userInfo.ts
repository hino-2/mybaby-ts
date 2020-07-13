import { IReduxActionUserInfo } from "../../interfaces";

const userInfo = (state = null, action: IReduxActionUserInfo) => {
	switch (action.type) {
		case "USER_LOGIN":
			return action.payload;
		default:
			return state;
	}
};

export default userInfo;
