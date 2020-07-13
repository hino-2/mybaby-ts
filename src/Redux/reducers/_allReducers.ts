import isMobileReducer from "./isMobile";
import userInfoReducer from "./userInfo";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	isMobile: isMobileReducer,
	user: userInfoReducer,
});

export default allReducers;
// export type RootState = ReturnType<typeof allReducers>;
