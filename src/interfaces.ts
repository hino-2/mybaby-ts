import allReducers from "./Redux/reducers/_allReducers";

export interface IBabyWeight {
	date: Date;
	id: string;
	weight: number;
}

export interface IBaby {
	id: string;
	name: string;
	gender: "m" | "f";
	dob: Date;
	weights: IBabyWeight[] | [];
}

export interface IUser {
	_id: string;
	babies: IBaby[] | [];
	name: string;
	email: string;
	gender: "m" | "f";
	money: number;
}

export interface IBackendResponse {
	data: IUser | null;
	error: string | null;
}

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
