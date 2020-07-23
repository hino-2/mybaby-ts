import Cookies from "universal-cookie";
import { BabyWeight } from "../interfaces";

export function formatDate(date: Date): string {
	const _d = new Date(date);
	return _d.toLocaleDateString("en-CA");
}

export const calcDiffInDays = (dateA: Date, dateB: Date): number => {
	const _dateA = new Date(dateA);
	const _dateB = new Date(dateB);
	return Math.abs(Math.floor((_dateB.getTime() - _dateA.getTime()) / (1000 * 60 * 60 * 24)));
};

export const calcDiffInMonths = (dateA: Date, dateB: Date): number => {
	let diff = dateB.getMonth() - dateA.getMonth();
	diff = diff < 0 ? diff + 12 : diff;
	return Math.abs(diff);
};

export const sortByDate = (a: BabyWeight, b: BabyWeight): number =>
	new Date(a.date).getTime() - new Date(b.date).getTime();

export const calculateLifeSpan = (dateOfBirth: Date): string => {
	const today = new Date();
	const dob = new Date(dateOfBirth);
	const yearsOld = Math.floor((today.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24 * 365));
	const monthsOld = Math.floor(
		((today.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24) / 30.5) % 12
	);
	const daysOld = Math.floor(((today.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24)) % 30.5);
	const yearWordMap = ["лет", "год", "года", "года", "года", "лет"];
	const daysWordMap = ["", "день", "дня", "дня", "дня", "дней"];

	let res =
		yearsOld > 0 ? `${yearsOld} ${yearWordMap[yearsOld] ? yearWordMap[yearsOld] : "лет"}` : "";
	res += monthsOld > 0 ? ` ${monthsOld} мес` : "";
	if (!res) res = `${daysOld} ${daysWordMap[daysOld] ? daysWordMap[daysOld] : "дней"}`;
	if (yearsOld === 0 && monthsOld === 0) res = "";

	return res;
};

export const setCookie = (key: string, value: any) => {
	const cookie = new Cookies();
	cookie.set(key, value, { path: "/", maxAge: 3600 });
};
