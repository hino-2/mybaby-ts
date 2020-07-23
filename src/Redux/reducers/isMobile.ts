import { ReduxActionIsMobile } from "../../interfaces";

const isMobileReducer = (state = false, action: ReduxActionIsMobile): boolean => {
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
