import React from "react";
import { Link } from "react-router-dom";
import "./LoginButton.scss";

type LoginButtonProps = {
	loggedIn: boolean;
	classes?: string;
	iconSide?: "left" | "right";
	icon?: string;
};

const LoginButton: React.FC<LoginButtonProps> = ({ loggedIn, classes, icon, iconSide }) => {
	return (
		<div className="linkbutton">
			<Link to={loggedIn ? "/logout" : "/login"} className={classes}>
				<i className={`material-icons ${iconSide}`}>{icon}</i>
				{loggedIn ? "Выйти" : "Войти"}
			</Link>
		</div>
	);
};

export default LoginButton;
