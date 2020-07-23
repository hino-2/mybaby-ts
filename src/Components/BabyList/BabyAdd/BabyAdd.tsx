import React, { useState, useRef, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";
import { useDispatch } from "react-redux";
import { Baby } from "../../../interfaces";
import { addBabyToDB } from "../../../Logic/babies";
import { datepickerOptions } from "../../../Styles/component_options";
import "./BabyAdd.scss";

type BabyAddProps = {
	userId: string;
};

const BabyAdd: React.FC<BabyAddProps> = ({ userId }) => {
	useEffect(() => {
		M.Datepicker.init(document.querySelectorAll(".datepicker"), datepickerOptions);
	});

	const today: string = new Date().toLocaleDateString("en-CA");
	const dispatch = useDispatch();

	const [jeSuis, setJeSuis] = useState("leButton");
	const [gender, setGender] = useState("m");

	const babyNameRef = useRef<HTMLInputElement>(null);
	const babyGenderRef = useRef<HTMLInputElement>(null);
	const babyDOBRef = useRef<HTMLInputElement>(null);

	let classes: string[] = ["baby-add-form"];
	if (gender === "m") classes.push("boy");
	if (gender === "f") classes.push("girl");

	const toggleBabyGender = () => {
		if (babyGenderRef.current!.checked) setGender("f");
		else setGender("m");
	};

	const submitNewBaby = async () => {
		const babyName = babyNameRef.current!.value;
		const babyGender = babyGenderRef.current!.checked ? "f" : "m";
		const babyDOB = babyDOBRef.current!.value;

		if (babyName === "" || babyDOB === "") return;
		if (isNaN(Date.parse(babyDOB))) {
			alert("Дата указана неверно");
			return;
		}

		const newBaby: Baby = {
			id: Date.now().toString(),
			name: babyName,
			gender: babyGender,
			dob: new Date(babyDOB),
			weights: [],
		};

		const result: string = await addBabyToDB(userId, newBaby, dispatch);
		if (result === "ok") setJeSuis("leButton");
		else alert("try again");
	};

	if (jeSuis === "leButton")
		return (
			<div className="baby-add-button">
				<button onClick={() => setJeSuis("leForm")}>Добавить утенка</button>
			</div>
		);

	return (
		<div className={classes.join(" ")}>
			<div>
				<Image cloudName="hino-2" publicId="v1/mybaby/duck.png" title="Утенок">
					<Transformation height="20" width="20" quality="auto:good" crop="fit" />
				</Image>
			</div>
			<div className="input-field">
				<input
					type="text"
					className="baby-name"
					ref={babyNameRef}
					placeholder="Имя утенка"
				/>
			</div>
			<div>
				<input
					type="checkbox"
					id="baby-gender"
					ref={babyGenderRef}
					onChange={toggleBabyGender}
					style={{ display: "none" }}
					checked={gender !== "m"}
				/>
				<label
					htmlFor="baby-gender"
					className="gender-switch"
					style={{ cursor: "pointer", textDecoration: "underline" }}>
					{gender === "m" ? "мальчик" : "девочка"}
				</label>
			</div>
			<div className="input-field">
				{/* <input type="text" ref={babyDOBRef} defaultValue={today} /> */}
				<input type="text" ref={babyDOBRef} defaultValue={today} className="datepicker" />
			</div>
			<div style={{ cursor: "pointer" }}>
				<Image
					cloudName="hino-2"
					publicId="v1/mybaby/close.png"
					onClick={() => setJeSuis("leButton")}
					title="Отмена">
					<Transformation height="20" width="20" quality="auto:good" crop="fit" />
				</Image>
				&nbsp;
				<Image
					cloudName="hino-2"
					publicId="v1/mybaby/submit3.png"
					onClick={submitNewBaby}
					title="Добавить">
					<Transformation height="20" width="20" quality="auto:good" crop="fit" />
				</Image>
			</div>
		</div>
	);
};

export default BabyAdd;
