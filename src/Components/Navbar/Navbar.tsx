import React from "react";
import Title from "./Title/Title";
import LinkButton from "../LinkButton/LinkButton";
import LoginButton from "./LoginButton/LoginButton";
import BabyList from "../BabyList/BabyList";
import { useSelector, useDispatch } from "react-redux";
import { User, RootState } from "../../interfaces";
import "./Navbar.scss";
import { loadData } from "../../Redux/actions/actions";

const Navbar: React.FC = () => {
	const dispatch = useDispatch();
	const user: User = useSelector((state: RootState) => state.user);

	const onclick = (): void => {
		dispatch(loadData());
	};

	return (
		<div className="navbar">
			<Title title="mybaby-ts" />
			<LoginButton
				loggedIn={user ? true : false}
				classes="waves-effect waves-light btn teal darken-2 width100"
				icon="account_circle"
				iconSide="left"
			/>
			{user ? (
				<>
					<LinkButton
						to="/lk"
						text="кабинет"
						classes={`waves-effect waves-light btn ${
							user.gender === "m" ? "cyan darken-1" : "pink lighten-3"
						} width100`}
						icon="chrome_reader_mode"
						iconSide="left"
					/>
					<div className="babylist-container">
						<BabyList babies={user.babies} isEditable={false} showAge={false} />
					</div>
				</>
			) : (
				[]
			)}
			<div>&nbsp;</div>
			<LinkButton
				to="/weightCalc"
				text="Вес"
				classes="waves-effect waves-light btn teal darken-2 width100"
				icon="fitness_center"
				iconSide="left"
			/>
			<LinkButton
				to="/shots"
				text="Прививки"
				classes="waves-effect waves-light btn teal darken-2 width100"
				icon="local_hospital"
				iconSide="left"
			/>
			<LinkButton
				to="/games"
				text="Игры"
				classes="waves-effect waves-light btn teal darken-2 width100"
				icon="games"
				iconSide="left"
			/>
			<button onClick={onclick}>loadData</button>
		</div>
	);
};

export default Navbar;
