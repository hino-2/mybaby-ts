import React from "react";
import { Link } from "react-router-dom";
import "./Title.scss";

type TitleProps = {
	title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => (
	<Link to="/">
		<div className="title">{title}</div>
	</Link>
);

export default Title;
