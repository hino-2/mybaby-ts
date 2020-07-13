import React from "react";
import { Link } from "react-router-dom";
import "./LinkButton.scss";

type LinkButtonProps = {
	to: string;
	text: string;
	classe?: string;
	iconSide?: "left" | "right";
	icon?: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ to, text, classe: classes, icon, iconSide }) => {
	return (
		<div className="linkbutton">
			<Link to={to} className={classes}>
				<i className={`material-icons ${iconSide}`}>{icon}</i>
				{text}
			</Link>
		</div>
	);
};

export default LinkButton;
