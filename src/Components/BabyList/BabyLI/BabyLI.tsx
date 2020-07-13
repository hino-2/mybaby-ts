import React from "react";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";
import { IBaby } from "../../../interfaces";
import { formatDate, calculateLifeSpan } from "../../../Logic/utils";
import BabyDelete from "../BabyDelete/BabyDelete";
import "./BabyLI.scss";

type BabyLIProps = {
	baby: IBaby;
	selected: boolean;
	isEditable: boolean;
	showAge: boolean;
};

const BabyLI: React.FC<BabyLIProps> = ({ baby, selected, isEditable, showAge }) => {
	let classes: string[] = ["baby-li"];
	if (showAge) classes.push("show-age");
	if (isEditable) classes.push("is-editable");
	if (selected) classes.push("selected");
	if (baby.gender === "m") classes.push("male");
	if (baby.gender === "f") classes.push("female");

	return (
		<div className={classes.join(" ")} id={baby.id}>
			<div style={{ display: "inline-block" }}>
				<Image cloudName="hino-2" publicId="v1/mybaby/duck.png" title="Утенок">
					<Transformation height="20" width="20" quality="auto:good" crop="fit" />
				</Image>
			</div>
			<div className="name">
				<Link to={`/babies/${baby.name}`} style={{ color: "white" }}>
					{baby.name}
				</Link>
			</div>
			{showAge ? (
				<>
					<div>{calculateLifeSpan(baby.dob)}</div>
					<div>{formatDate(baby.dob)}</div>
				</>
			) : (
				[]
			)}
			{isEditable ? (
				<div>
					<BabyDelete baby={baby} />
					&nbsp;
					{/* <BabyEdit baby={baby} /> */}
				</div>
			) : (
				[]
			)}
		</div>
	);
};

export default BabyLI;
