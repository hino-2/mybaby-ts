import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "./reducers/_allReducers";

const configureStore = (): Store => {
	const middlewares = [thunk];
	const middlewareEnchancer = applyMiddleware(...middlewares);

	const enchancers = [middlewareEnchancer];
	const composedEnchancers = composeWithDevTools(...enchancers);

	const store = createStore(allReducers as any, composedEnchancers);

	return store;
};

export default configureStore;
