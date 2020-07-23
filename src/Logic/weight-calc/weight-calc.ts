import { BabyWeight, BackendResponse } from "../../interfaces";
import WeightsEnricher from "./WeightEnricher";

export const enrichWeights = (currWeights: BabyWeight[]): BabyWeight[] => {
	const weightsEnricher = new WeightsEnricher(currWeights);
	return weightsEnricher.enrich();
};

export const saveToDB = async (enrichedWeights: BabyWeight[]): Promise<BackendResponse> => {
	console.log("saveToDB is not implemented yet. Also,", enrichedWeights);

	return {
		error: null,
		data: null,
	};
};
