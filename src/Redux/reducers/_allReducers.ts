import isMobileReducer from "./isMobile";
import userInfoReducer from "./userInfo";
import putDataReducer from "./putData";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	isMobile: isMobileReducer,
	user: userInfoReducer,
	loadedData: putDataReducer,
});

export default allReducers;
// export type RootState = ReturnType<typeof allReducers>;
