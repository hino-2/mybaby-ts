import React from "react";
import { Image, Transformation } from "cloudinary-react";
import "./WeightDelete.scss";
import { BabyWeight } from "../../../interfaces";

type WeightDeleteProps = {
	weight: BabyWeight;
	deleteWeight: (e: React.MouseEvent) => void;
};

const WeightDelete: React.FC<WeightDeleteProps> = ({ weight = {}, deleteWeight }) => (
	<div className="weight-delete">
		<Image
			cloudName="hino-2"
			publicId="v1/mybaby/close.png"
			id={weight.id}
			onClick={deleteWeight}
			title="Удалить">
			<Transformation height="20" width="20" quality="auto:good" crop="fit" />
		</Image>
	</div>
);

export default WeightDelete;
