import React from "react";
import "./Container.scss";
import { Switch, Route } from "react-router-dom";
import LK from "../../Routes/LK/LK";
import HomePage from "../../Routes/HomePage/HomePage";
import WeightCalc from "../../Routes/WeightCalc/WeightCalc";

const Container: React.FC = () => {
	return (
		<div className="container">
			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route path="/lk" component={LK} />
				<Route path="/weightCalc" component={WeightCalc} />
			</Switch>
		</div>
	);
};

export default Container;
