import { IReduxActionIsMobile } from "../interfaces";

const isMobileReducer = (state = false, action: IReduxActionIsMobile): boolean => {
	switch (action.type) {
		case "MOBILE":
			return true;
		case "DESKTOP":
			return false;
		default:
			return state;
	}
};

export default isMobileReducer;
