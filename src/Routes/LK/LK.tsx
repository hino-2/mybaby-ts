import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import BabiesList from "../../Components/BabyList/BabyList";
import BabyAdd from "../../Components/BabyList/BabyAdd/BabyAdd";
import { RootState, User } from "../../interfaces";
import "./LK.scss";

const LK = () => {
	const user: User = useSelector((state: RootState) => state.user);
	const history = useHistory();

	const inputClasses: string[] = ["form__field"];

	if (user) {
		if (user.gender === "m") inputClasses.push("dad");
		if (user.gender === "f") inputClasses.push("mom");
	}

	useEffect(() => {
		// if (!user) history.push("/login");
	}, [user]);

	if (!user) return null;

	return (
		<div className="lk">
			<div>&nbsp;</div>
			<div className="item-label">Меня зовут</div>
			<div>&nbsp;</div>

			<div>&nbsp;</div>
			<div className="form__group field">
				<input
					type="input"
					className={inputClasses.join(" ")}
					placeholder="Имя"
					id="name"
					autoComplete="false"
					defaultValue={user.name}
					required
				/>
			</div>
			<div>&nbsp;</div>

			<div>&nbsp;</div>
			<div className="item-label">Моя почта</div>
			<div>&nbsp;</div>

			<div>&nbsp;</div>
			<div className="form__group field">
				<input
					type="input"
					className={inputClasses.join(" ")}
					placeholder="E-mail"
					id="email"
					autoComplete="false"
					defaultValue={user.email}
					required
				/>
			</div>
			<div>&nbsp;</div>

			<div>&nbsp;</div>
			<div className="item-label">Мои утята</div>
			<div>&nbsp;</div>

			<div>&nbsp;</div>
			<BabiesList babies={user.babies} isEditable={true} showAge={true} />
			<div>&nbsp;</div>

			<div>&nbsp;</div>
			<BabyAdd userId={user._id} />
			<div>&nbsp;</div>
		</div>
	);
};

export default LK;
