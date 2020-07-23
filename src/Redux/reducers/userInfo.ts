import { ReduxActionUserInfo } from "../../interfaces";

const userInfo = (state = null, action: ReduxActionUserInfo) => {
	switch (action.type) {
		case "USER_LOGIN":
			return action.payload;
		default:
			return state;
	}
};

export default userInfo;
