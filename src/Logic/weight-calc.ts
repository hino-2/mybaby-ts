import { formatDate } from "./utils";

type Weight = {
	date: Date;
	id: number;
	weight: number;
};

type BackendResponse = {
	error: string | null;
	data: string | null;
};

const getDiffInDays = (dateA: Date, dateB: Date): number =>
	Math.abs(Math.floor((dateB.getTime() - dateA.getTime()) / (1000 * 60 * 60 * 24)));

const getDiffInMonths = (dateA: Date, dateB: Date): number => {
	let diff = dateB.getMonth() - dateA.getMonth();
	diff = diff < 0 ? diff + 12 : diff;
	return Math.abs(diff);
};

const getNextMonthAndYear = (currMonth: number, currYear: number): number[] => {
	let nextMonth: number = currMonth + 1;
	let nextYear: number = currYear;
	if (nextMonth >= 13) {
		nextMonth = 1;
		nextYear++;
	}
	return [nextMonth, nextYear];
};

export const sortByDate = (a: Weight, b: Weight): number =>
	new Date(a.date).getTime() - new Date(b.date).getTime();

export const enrichWeights = (weights: Weight[]): Weight[] => {
	let currWeights: Weight[] = weights.slice();
	let newWeights: Weight[] = [];

	weights.forEach((item, i, arr) => {
		if (!arr[i + 1]) return;

		const dateA: Date = new Date(item.date);
		const dateB: Date = new Date(arr[i + 1].date);
		const diffInDays: number = getDiffInDays(dateA, dateB);
		const diffInMonths: number = getDiffInMonths(dateA, dateB);
		const incByDay: number = (arr[i + 1].weight - item.weight) / diffInDays;
		console.log(diffInDays, diffInMonths, incByDay);

		let oldDate: Date = new Date(item.date);
		let newDateMonth: number = dateA.getMonth();
		let newDateYear: number = dateA.getFullYear();
		let newWeight: number = item.weight;
		for (let i = 1; i <= diffInMonths; i++) {
			[newDateMonth, newDateYear] = getNextMonthAndYear(newDateMonth, newDateYear);
			const newDate: Date = new Date(newDateYear, newDateMonth, 1);

			newWeight = Math.floor(newWeight + getDiffInDays(newDate, oldDate) * incByDay);

			if (
				![...currWeights, ...newWeights].some(
					(w) => formatDate(w.date) === formatDate(newDate)
				)
			)
				newWeights.push({
					date: newDate,
					weight: newWeight,
					id: Date.now(),
				});

			oldDate = newDate;
		}
	});

	return [...currWeights, ...newWeights].sort(sortByDate);
};

export const saveToDB = async (enrichedWeights: Weight[]): Promise<BackendResponse> => {
	console.log("saveToDB is not implemented yet. Also,", enrichedWeights);

	return {
		error: null,
		data: null,
	};
};
