import { formatDate } from "./utils";
import { IBabyWeight, IBackendResponse } from "../interfaces";

export const calcDiffInDays = (dateA: Date, dateB: Date): number => {
	const _dateA = new Date(dateA);
	const _dateB = new Date(dateB);
	return Math.abs(Math.floor((_dateB.getTime() - _dateA.getTime()) / (1000 * 60 * 60 * 24)));
};

const calcDiffInMonths = (dateA: Date, dateB: Date): number => {
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

export const sortByDate = (a: IBabyWeight, b: IBabyWeight): number =>
	new Date(a.date).getTime() - new Date(b.date).getTime();

const alreadyInWeights = (weights: IBabyWeight[], date: Date): boolean => {
	return weights.some((w) => formatDate(w.date) === formatDate(date));
};

const addNewWeightsBetween = (
	weightItem: IBabyWeight,
	i: number,
	weights: IBabyWeight[],
	currWeights: IBabyWeight[],
	newWeights: IBabyWeight[]
): void => {
	const intervalStart = new Date(weightItem.date);
	const intervalEnd = new Date(weights[i + 1].date);
	const diffInDays: number = calcDiffInDays(intervalStart, intervalEnd);
	const diffInMonths: number = calcDiffInMonths(intervalStart, intervalEnd);
	const incGrammByDay: number = (weights[i + 1].weight - weightItem.weight) / diffInDays;

	let oldDate = new Date(weightItem.date);
	let newDateMonth = intervalStart.getMonth();
	let newDateYear = intervalStart.getFullYear();
	let newWeight: number = weightItem.weight;
	for (let i = 1; i <= diffInMonths; i++) {
		[newDateMonth, newDateYear] = getNextMonthAndYear(newDateMonth, newDateYear);
		const newDate = new Date(newDateYear, newDateMonth, 1);

		newWeight = Math.floor(newWeight + calcDiffInDays(newDate, oldDate) * incGrammByDay);

		if (!alreadyInWeights([...currWeights, ...newWeights], newDate))
			newWeights.push({
				date: newDate,
				weight: newWeight,
				id: Date.now().toString(),
			});

		oldDate = newDate;
	}
};

export const enrichWeights = (weights: IBabyWeight[]): IBabyWeight[] => {
	let currWeights: IBabyWeight[] = weights.slice();
	let newWeights: IBabyWeight[] = [];

	weights.forEach((weightItem, i, weights) => {
		if (!weights[i + 1]) return;
		addNewWeightsBetween(weightItem, i, weights, currWeights, newWeights);
	});

	return [...currWeights, ...newWeights].sort(sortByDate);
};

export const saveToDB = async (enrichedWeights: IBabyWeight[]): Promise<IBackendResponse> => {
	console.log("saveToDB is not implemented yet. Also,", enrichedWeights);

	return {
		error: null,
		data: null,
	};
};
