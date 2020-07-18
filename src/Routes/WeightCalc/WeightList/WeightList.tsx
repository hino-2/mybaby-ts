import React from "react";
import WeightLI from "../WeightLI/WeightLI";
import { IBabyWeight } from "../../../interfaces";
import { calcDiffInDays } from "../../../Logic/weight-calc";
import "./WeightList.scss";

type WeightListProps = {
	weights: IBabyWeight[];
	dob: Date;
	isEditable?: boolean;
	deleteWeight: (e: React.MouseEvent) => void;
};

const WeightList: React.FC<WeightListProps> = ({
	weights = [],
	dob,
	isEditable = true,
	deleteWeight,
}) => (
	<div className="weights" key={weights.length}>
		{weights
			.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
			.map((item, i, arr) => (
				<WeightLI
					weight={item}
					birthWeight={
						weights.find(
							(w) => new Date(w.date).getTime() === new Date(arr[0].date).getTime()
						)?.weight || 0
					}
					ageInDays={calcDiffInDays(item.date, dob)}
					isEditable={isEditable}
					deleteWeight={deleteWeight}
					key={item.id}
				/>
			))}
	</div>
);

export default WeightList;
