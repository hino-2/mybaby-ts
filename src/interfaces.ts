import allReducers from "./Redux/reducers/_allReducers";

export type IBabyWeight = {
	date: Date;
	id: string;
	weight: number;
};

export type IBaby = {
	id: string;
	name: string;
	gender: "m" | "f";
	dob: Date;
	weights: IBabyWeight[] | [];
};

export type IUser = {
	_id: string;
	babies: IBaby[] | [];
	name: string;
	email: string;
	gender: "m" | "f";
	money: number;
};

export type IBackendResponse = {
	data: IUser | null;
	error: string | null;
};

export type RootState = ReturnType<typeof allReducers>;

interface IReduxAction {
	type: string;
}

export interface IReduxActionUserInfo extends IReduxAction {
	payload: IUser | null;
}

export interface IReduxActionIsMobile extends IReduxAction {
	payload: boolean;
}
