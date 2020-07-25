import { PUT_DATA } from "../actions/actions";

const initialState = {};

const putDataReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case PUT_DATA:
			return action.payload;
		default:
			return state;
	}
};

export default putDataReducer;
