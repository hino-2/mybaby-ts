import Cookies from "universal-cookie";

export function formatDate(date: Date): string {
	const _d = new Date(date);
	return _d.toLocaleDateString("en-CA");
}

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

	return res;
};

export const setCookie = (key: string, value: any) => {
	const cookie = new Cookies();
	cookie.set(key, value, { path: "/", maxAge: 3600 });
};
