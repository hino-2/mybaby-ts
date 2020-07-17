import React, { useState } from "react";
import WeightDelete from "../WeightDelete/WeightDelete";
import "./WeightLI.scss";
import { IBabyWeight } from "../../../interfaces";

type WeightLIProps = {
	weight: IBabyWeight;
	isEditable: boolean;
	deleteWeight: (e: React.MouseEvent) => void;
};

const WeightLI: React.FC<WeightLIProps> = ({ weight, isEditable = true, deleteWeight }) => {
	const [date, setDate] = useState<string>(
		new Date(weight.date).toLocaleDateString("en-CA") || ""
	);
	const [value, setValue] = useState<string>(weight.weight.toString() || "");

	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setDate(e.target.value);
	};

	const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
	};

	return (
		<div className="weight-li">
			<div className="date">
				<input type="date" value={date} onChange={handleDateChange} />
			</div>
			<div className="weight">
				<input type="text" value={value} onChange={handleValueChange} />
			</div>
			<div className="normal">&nbsp;</div>
			{isEditable && <WeightDelete weight={weight} deleteWeight={deleteWeight} />}
		</div>
	);
};

export default WeightLI;
