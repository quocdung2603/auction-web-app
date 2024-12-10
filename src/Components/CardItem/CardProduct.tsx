import { IconLocation, IconPlus } from "../../Common/Icon/Icon";
import Button from "../Button/Button";

interface CardProductProps {
	img?: string;
	name?: string;
	location?: string;
	time?: string;
	price?: string;
}

const cardProduct: React.FC<CardProductProps> = ({
	img,
	name,
	location,
	time,
	price,
}) => {
	return (
		<div className="w-[300px] flex flex-col shadow-custom items-center p-8 border-2 h-3/4">
			<p>Thời gian đấu giá</p>
			<p className="mx-2">12/12/2024 09:00:00</p>
			<img
				src="https://lacvietauction.vn/tai-san-dau-gia/1003168-lo-2:-10-san-pham-xe-dap-dien-cu%CC%A3c-qua%CC%89n-ly%CC%81-thi%CC%A3-truo%CC%80ng-ti%CC%89nh-ha%CC%80-giang"
				alt=""
        className="w-full h-56"
			/>
			<div className="flex flex-row space-x-3 mx-2">
				<IconLocation width="1.25rem" height="1.25rem" />
				<p>{location}</p>
			</div>
			<div className="ml-auto mr-2"></div>
		</div>
	);
};

export default cardProduct;
