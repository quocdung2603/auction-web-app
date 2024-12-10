import { Link } from "react-router-dom";
import ButtonPrimary from "../../../../Components/Button/ButtonPrimary";

interface DataPropertyProps {
	id: string;
	gia_khoi_diem: string;
	timeStartRegister: string;
	timeEndRegister: string;
	feeRegister: string;
	priceStep: string;
	priceStepMax: string;
	deposit: string;
	auctionMethod: string;
	propertyOwner: string;
	viewLocation: string;
	timeViewProperty: string;
	biddingStartTime: string;
	biddingEndTime: string;
}
const propertyNames: { [key: string]: string } = {
	id: "Mã tài sản",
	gia_khoi_diem: "Giá khởi điểm",
	timeStartRegister: "Thời gian mở đăng ký",
	timeEndRegister: "Thời gian kết thúc đăng ký",
	feeRegister: "Phí đăng ký tham gia đấu giá",
	priceStep: "Bước giá",
	priceStepMax: "Số bước giá tối đa/ lần trả:",
	deposit: "Tiền đặt trước",
	auctionMethod: "Phương thức đấu giá",
	propertyOwner: "Tên chủ tài sản",
	viewLocation: "Nơi xem tài sản",
	timeViewProperty: "Thời gian xem tài sản",
	biddingStartTime: "Thời gian bắt đầu đấu giá",
	biddingEndTime: "Thời gian kết thúc đấu giá",
};

interface InfoListProps {
	isGoingOn: boolean;
	DataProperty: DataPropertyProps;
}

const countDown: any[] = [
	{
		title: "NGÀY",
		value: "04",
	},
	{
		title: "GIỜ",
		value: "14",
	},
	{
		title: "PHÚT",
		value: "36",
	},
	{
		title: "GIÂY",
		value: "23",
	},
];

function CheckIsGoingOn(condition: boolean) {
	if (condition) {
		return (
			<div className="flex flex-col space-y-5">
				<p className="text-[18px] text-gray-500">
					Thời gian đếm ngược bắt đầu trả giá:
				</p>
				<div className="flex flex-row justify-between items-center border py-[2%] px-[10%] shadow-xl">
					{countDown.map((item, index) => (
						<div
							key={index + 0}
							className="flex flex-col text-center"
						>
							<p className="text-[24px] font-bold">
								{item.value}
							</p>
							<p className="text-[16px] text-gray-500">
								{item.title}
							</p>
						</div>
					))}
				</div>
			</div>
		);
	} else {
		return (
			<div className="flex flex-col space-y-5">
				<p className="text-[18px] text-gray-500">
					Cuộc đấu giá đã kết thúc
				</p>
				<div className="flex flex-row justify-center items-center space-x-2 w-full border py-5 shadow-2xl">
					<p className="text-[24px] text-black font-bold">
						Xem kết quả cuộc đấu giá
					</p>
					<Link to="">
						<p className="text-[24px] text-primary font-bold">
							Tại đây
						</p>
					</Link>
				</div>
			</div>
		);
	}
}

const productInfo: React.FC<InfoListProps> = ({ isGoingOn, DataProperty }) => {
	return (
		<>
			{CheckIsGoingOn(isGoingOn)}
			<div className="border p-3 bg-white space-y-3">
				<div className="flex justify-between">
					<p className="w-1/2 text-xl font-semibold text-gray-700">
						Giá khởi điểm:
					</p>
					<p className="w-1/2 text-end text-red text-xl font-semibold">
						{DataProperty.gia_khoi_diem} VND
					</p>
				</div>
				{Object.entries(DataProperty).map(([key, value]) =>
					key !== "gia_khoi_diem" ? (
						<div className="flex justify-between" key={key}>
							<p className="w-1/2 font-medium text-gray-400">
								{propertyNames[key]}:
							</p>
							<p className="w-1/2 text-end text-red font-medium">
								{value}
							</p>
						</div>
					) : (
						""
					)
				)}
        <ButtonPrimary className="w-full py-2 text-lg">Đăng ký tham gia đấu giá</ButtonPrimary>
			</div>
		</>
	);
};

export default productInfo;
