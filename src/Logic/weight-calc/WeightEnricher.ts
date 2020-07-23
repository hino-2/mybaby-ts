import { BabyWeight } from "../../interfaces";
import { formatDate, calcDiffInDays, calcDiffInMonths, sortByDate } from "../utils";

class WeightsEnricher {
	constructor(readonly currWeights: BabyWeight[]) {}

	private dateIsNotAlreadyInWeightsArray = (weights: BabyWeight[], date: Date): boolean => {
		return !weights.some((w) => formatDate(w.date) === formatDate(date));
	};

	private getNextDate = (date: Date): Date => {
		let nextMonth: number = date.getMonth() + 1;
		let nextYear: number = date.getFullYear();
		if (nextMonth >= 13) {
			nextMonth = 1;
			nextYear++;
		}
		return new Date(nextYear, nextMonth, 1);
	};

	private addNewWeightsBetweenDates = (
		itemOnCurrentDate: BabyWeight,
		itemOnNextDate: BabyWeight,
		currWeights: BabyWeight[]
	): BabyWeight[] => {
		let result = [] as BabyWeight[];

		const interval = {
			start: new Date(itemOnCurrentDate.date),
			end: new Date(itemOnNextDate.date),
		};
		const incGrammByDay: number =
			(itemOnNextDate.weight - itemOnCurrentDate.weight) /
			calcDiffInDays(interval.end, interval.start);
		const monthsElapsed = calcDiffInMonths(interval.start, interval.end);

		let oldDate = new Date(itemOnCurrentDate.date);
		let newDate = interval.start;
		let newWeight = itemOnCurrentDate.weight;

		for (let i = 1; i <= monthsElapsed; i++) {
			newDate = this.getNextDate(newDate);
			const daysElapsed = calcDiffInDays(newDate, oldDate);

			newWeight = Math.floor(newWeight + daysElapsed * incGrammByDay);

			if (this.dateIsNotAlreadyInWeightsArray([...currWeights, ...result], newDate))
				result.push({
					date: newDate,
					weight: newWeight,
					id: Date.now().toString(),
				});

			oldDate = newDate;
		}

		return result;
	};

	enrich = (): BabyWeight[] => {
		let result = [] as BabyWeight[];

		this.currWeights.forEach((weightItem, i, weights) => {
			const noFutureIntervals: boolean = !weights[i + 1];

			if (noFutureIntervals) return;
			let nextWeightItem: BabyWeight = weights[i + 1];
			result.push(...this.addNewWeightsBetweenDates(weightItem, nextWeightItem, weights));
		});

		return [...this.currWeights, ...result].sort(sortByDate);
	};
}

export default WeightsEnricher;
