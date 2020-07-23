import React from "react";
import { Baby } from "../../interfaces";
import BabyLI from "./BabyLI/BabyLI";
import "./BabyList.scss";

type BabyListProps = {
	babies: Baby[];
	selectedBabyId?: string;
	isEditable: boolean;
	showAge: boolean;
};

const BabyList: React.FC<BabyListProps> = ({
	babies = [],
	selectedBabyId = "",
	isEditable = true,
	showAge = true,
}) => {
	return (
		<div className="babies">
			{babies
				.sort((a, b) => a.name.localeCompare(b.name))
				.map((item) => (
					<BabyLI
						baby={item}
						isEditable={isEditable}
						showAge={showAge}
						selected={selectedBabyId === item.id ? true : false}
						key={item.id}
					/>
				))}
		</div>
	);
};

export default BabyList;
