import React from "react";
import "./Container.scss";
import { Switch, Route } from "react-router-dom";
import LK from "../../Routes/LK/LK";
import HomePage from "../../Routes/HomePage/HomePage";

const Container: React.FC = () => {
	return (
		<div className="container">
			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route path="/lk" component={LK} />
			</Switch>
		</div>
	);
};

export default Container;
