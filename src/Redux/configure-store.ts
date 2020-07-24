import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "./reducers/_allReducers";
import { watchLoadData } from "./sagas/sagas";

const configureStore = (): Store => {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [thunk, sagaMiddleware];
	const middlewareEnchancer = applyMiddleware(...middlewares);

	const enchancers = [middlewareEnchancer];
	const composedEnchancers = composeWithDevTools(...enchancers);

	const store = createStore(allReducers as any, composedEnchancers);

	sagaMiddleware.run(watchLoadData);

	return store;
};

export default configureStore;
