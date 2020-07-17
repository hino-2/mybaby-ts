import React, { useState } from "react";
import { useSelector } from "react-redux";
import BabiesList from "../../Components/BabyList/BabyList";
import WeightList from "./WeightList/WeightList";
import { sortByDate, enrichWeights, saveToDB } from "../../Logic/weight-calc";
import { RootState, IUser, IBaby, IBabyWeight } from "../../interfaces";
import description from "./description";
import "./WeightCalc.scss";

type WeightCalcState = {
	babies: IBaby[];
	selectedBabyId: string;
	selectedBabyWeights: IBabyWeight[];
};

const WeightCalc: React.FC = () => {
	const user: IUser = useSelector((state: RootState) => state.user);

	const [state, setState] = useState<WeightCalcState>({
		babies: user ? user.babies : genericBabies,
		selectedBabyId: "",
		selectedBabyWeights: [],
	});

	const addWeightEntry = (): void => {
		setState((prev) => {
			const newWeight: IBabyWeight = {
				date: new Date(),
				weight: 0,
				id: Date.now().toString(),
			};

			return {
				...prev,
				selectedBabyWeights: [...prev.selectedBabyWeights, newWeight],
			};
		});
	};

	const deleteWeightEntry = (e: React.MouseEvent): void => {
		const target = e.target as HTMLImageElement;

		e.preventDefault();
		e.persist();

		setState((prev) => {
			return {
				...prev,
				selectedBabyWeights: prev.selectedBabyWeights.filter(
					(weight) => weight.id !== target.id
				),
			};
		});
	};

	const loadParams = (e: React.MouseEvent) => {
		const target = e.target as HTMLDivElement;
		const closestElem = target.closest(".baby-li");

		if (!closestElem) return;

		const babyLIId = closestElem.id;

		setState((prev) => {
			let selectedBaby: IBaby | undefined = prev.babies.find((baby) => baby.id === babyLIId);
			let selectedBabyWeights = [] as IBabyWeight[];
			if (selectedBaby) selectedBabyWeights = selectedBaby.weights.sort(sortByDate);

			return {
				...prev,
				selectedBabyId: babyLIId,
				selectedBabyWeights: selectedBabyWeights,
			};
		});
	};

	const calculateAndSaveWeights = async () => {
		const enrichedWeights = enrichWeights(state.selectedBabyWeights);
		saveToDB(enrichedWeights);

		setState((prev) => {
			return {
				...prev,
				selectedBabyWeights: enrichedWeights,
			};
		});
	};

	const addButtonAttributes = {
		className: `add-weight${state.selectedBabyId === "" ? " disabled" : ""}`,
		disabled: state.selectedBabyId ? false : true,
		onClick: addWeightEntry,
	};

	const submitButtonAttributes = {
		className: `calc-and-save ${state.selectedBabyWeights.length <= 1 ? " disabled" : ""}`,
		disabled: state.selectedBabyWeights.length > 1 ? false : true,
		onClick: calculateAndSaveWeights,
	};

	return (
		<div className="weight-calc">
			<div className="desc">{description}</div>
			<div onClick={loadParams}>
				<BabiesList
					babies={state.babies}
					selectedBabyId={state.selectedBabyId}
					isEditable={false}
					showAge={user !== null}
				/>
			</div>
			<div className="calc">
				<div className="headers">
					<div className="label">Дата</div>
					<div className="label">Вес, г</div>
					<div className="label">Норма, г</div>
					<div>&nbsp;</div>
				</div>
				<WeightList weights={state.selectedBabyWeights} deleteWeight={deleteWeightEntry} />
			</div>
			<div className="buttons">
				<div>
					<button {...addButtonAttributes}>Добавить дату и вес</button>
				</div>
				<div>
					<button {...submitButtonAttributes}>Рассчитать и сохранить</button>
				</div>
			</div>
		</div>
	);
};

export default WeightCalc;

const genericBabies: IBaby[] = [
	{
		name: "Мальчик",
		gender: "m",
		id: "genericBoy",
		weights: [],
		dob: new Date(),
	},
	{
		name: "Девочка",
		gender: "f",
		id: "genericGirl",
		weights: [],
		dob: new Date(),
	},
];
