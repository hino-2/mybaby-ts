import React from "react";
import { Baby } from "../../../interfaces";
import { deleteBaby } from "../../../Logic/babies";
// import { useSelector }    from 'react-redux'
import { Image, Transformation } from "cloudinary-react";
// import { useDispatch }    from 'react-redux'
// import { setUserCookie }  from '../../utils'
// import { userLogin }      from '../../actions'

type BabyDeleteProps = {
	baby: Baby;
};

const BabyDelete: React.FC<BabyDeleteProps> = ({ baby }) => {
	// const userId   = useSelector(state => state.user._id)
	// const dispatch = useDispatch()

	return (
		<Image
			cloudName="hino-2"
			publicId="v1/mybaby/close.png"
			id={baby.id}
			onClick={deleteBaby}
			title="Удалить">
			<Transformation height="20" width="20" quality="auto:good" crop="fit" />
		</Image>
	);
};

export default BabyDelete;
