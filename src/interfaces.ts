import allReducers from "./Redux/reducers/_allReducers";
import { AnyAction, Action } from "redux";

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

export type ReduxActionUserInfo = {
	type: string;
	payload: User | null;
};

export type ReduxActionIsMobile = {
	type: string;
	payload: boolean;
};
