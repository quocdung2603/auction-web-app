import { useState, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
// component
import PersonalInformation from "./Components/PersonalInformation";
import Notification from "./Components/Notifications";
import MyAuction from "./Components/MyAuction";
import History from "./Components/History";


interface selectPresonalProps {
	parameter: string;
	name: string;
	tab: ReactNode;
}
const PersonalPage = () => {
	const location = useLocation();
	console.log(location);
	const [select, setSelect] = useState<selectPresonalProps>({
		parameter: "#thong-tin-ca-nhan",
		name: "Thông tin cá nhân",
		tab: <PersonalInformation />,
	});
	const [selectPreson, setSelectPerson] = useState<selectPresonalProps[]>([
		{
			parameter: "#thong-tin-ca-nhan",
			name: "Thông tin cá nhân",
			tab: <PersonalInformation />,
		},
		{
			parameter: "#thong-bao",
			name: "Thông báo",
			tab: <Notification />,
		},
		{
			parameter: "#dau-gia-cua-toi",
			name: "Đấu giá của tôi",
			tab: <MyAuction/>,
		},
		{
			parameter: "#lich-su",
			name: "Lịch sử",
			tab: <History/>,
		},
	]);

	return (
		<div className="px-custom">
			<div className="flex flex-col h-[200px] justify-center border-b-2 mb-28">
				<h1 className="text-3xl font-semibold mb-4">
					Thông tin cá nhân
				</h1>
				<p>Trang chủ / Thông tin cá nhân</p>
			</div>
			<div className="flex gap-6">
				<div className="flex flex-col w-1/4 gap-4">
					{selectPreson.map((item, index) => (
						<div
							key={index}
							className={`${
								item.parameter === select.parameter
									? "bg-red text-white"
									: ""
							} hover:bg-red hover:text-white px-6 py-3 text-xl rounded shadow-custom cursor-pointer  transitionHight`}
							onClick={() => setSelect(item)}
						>
							<Link to={item.parameter}>
								<p>{item.name}</p>
							</Link>
						</div>
					))}
					<div className="px-6 py-3 text-xl rounded shadow-custom cursor-pointer">
						<p>Đăng xuất</p>
					</div>
				</div>
				<div className="w-3/4 rounded-md shadow-custom box-border">
					{select.tab}
				</div>
			</div>
		</div>
	);
};

export default PersonalPage;
