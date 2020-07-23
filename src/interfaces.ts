import allReducers from "./Redux/reducers/_allReducers";

export type BabyWeight = {
	date: Date;
	id: string;
	weight: number;
};

export type Baby = {
	id: string;
	name: string;
	gender: "m" | "f";
	dob: Date;
	weights: BabyWeight[] | [];
};

export type User = {
	_id: string;
	babies: Baby[] | [];
	name: string;
	email: string;
	gender: "m" | "f";
	money: number;
};

export type BackendResponse = {
	data: User | null;
	error: string | null;
};

export type RootState = ReturnType<typeof allReducers>;

interface IReduxAction {
	type: string;
}

export interface IReduxActionUserInfo extends IReduxAction {
	payload: User | null;
}

export interface IReduxActionIsMobile extends IReduxAction {
	payload: boolean;
}
