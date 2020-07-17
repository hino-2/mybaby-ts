import React from "react";
import WeightLI from "../WeightLI/WeightLI";
import "./WeightList.scss";
import { IBabyWeight } from "../../../interfaces";

type WeightListProps = {
	weights: IBabyWeight[];
	isEditable?: boolean;
	deleteWeight: (e: React.MouseEvent) => void;
};

const WeightList: React.FC<WeightListProps> = ({
	weights = [],
	isEditable = true,
	deleteWeight,
}) => (
	<div className="weights" key={weights.length}>
		{weights
			.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
			.map((item) => (
				<WeightLI
					weight={item}
					isEditable={isEditable}
					deleteWeight={deleteWeight}
					key={item.id}
				/>
			))}
	</div>
);

export default WeightList;
