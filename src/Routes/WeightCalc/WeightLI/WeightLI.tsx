import React, { useState, useEffect } from "react";
import M from "materialize-css";
import WeightDelete from "../WeightDelete/WeightDelete";
import { IBabyWeight } from "../../../interfaces";
import { datepickerOptions } from "../../../Styles/component_options";
import "./WeightLI.scss";

type WeightLIProps = {
	weight: IBabyWeight;
	ageInDays: number;
	birthWeight: number;
	isEditable: boolean;
	deleteWeight: (e: React.MouseEvent) => void;
};

const WeightLI: React.FC<WeightLIProps> = ({
	weight,
	ageInDays,
	birthWeight,
	isEditable = true,
	deleteWeight,
}) => {
	// const [date, setDate] = useState<string>(
	// 	new Date(weight.date).toLocaleDateString("en-CA") || ""
	// );
	const [value, setValue] = useState<string>(weight.weight.toString() || "");
	const normalClasses: string[] = ["normal"];

	useEffect(() => {
		M.Datepicker.init(document.querySelectorAll(".datepicker"), datepickerOptions);
	});

	// const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
	// 	setDate(e.target.value);
	// };

	const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
	};

	let normalWeight: number = 0;
	if (weight.weight) {
		// вес при рождении + 800 х b6 + 400 х a6
		const ageInMonths = Math.floor(ageInDays / 30.5);
		const monthsBeforeSix = ageInMonths >= 6 ? 6 : ageInMonths;
		const monthsAfterSix = ageInMonths >= 6 ? ageInMonths - 6 : 0;
		normalWeight = birthWeight + 800 * monthsBeforeSix + 400 * monthsAfterSix;
		if (normalWeight <= weight.weight + 1000 && normalWeight >= weight.weight - 1000)
			normalClasses.push("good");
		else normalClasses.push("bad");
	}

	return (
		<div className="weight-li">
			<div className="date">
				<input
					type="text"
					defaultValue={new Date(weight.date).toLocaleDateString("en-CA")}
					className="datepicker"
				/>
			</div>
			<div className="weight">
				<input type="text" value={value} onChange={handleValueChange} />
			</div>
			<div className={normalClasses.join(" ")}>{normalWeight}</div>
			{isEditable && <WeightDelete weight={weight} deleteWeight={deleteWeight} />}
		</div>
	);
};

export default WeightLI;
