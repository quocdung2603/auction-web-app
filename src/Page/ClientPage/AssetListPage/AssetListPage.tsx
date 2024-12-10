import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FaCalendar } from "react-icons/fa";
import { FiList } from "react-icons/fi";
import { PiSquaresFour } from "react-icons/pi";
import ButtonPrimary from "../../../Components/Button/ButtonPrimary";
import ShowPropertySmall from "./Components/ShowPropertySmall";
import ShowProjectBig from "./Components/ShowProjectBig";

const ListProjects = [1, 2, 3, 4, 5];

const AssetListPage = () => {
	const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(
		null
	);
	const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
	const [showSizeProject, setShowSizeProject] = useState<boolean>(false);
	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(!show);
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<div className="px-custom ">
				<div className="flex flex-col h-[200px] justify-center border-b-2">
					<h1 className="text-3xl font-semibold mb-4">
						Danh mục tài sản
					</h1>
					<p>Trang chủ / Danh mục tài sản</p>
				</div>
				<div className="flex gap-4 mt-4 bg-transparent">
					<div
						className={`${
							show
								? "opacity-100 translate-y-6"
								: " opacity-0 translate-y-0"
						}relative w-[23%] min-w-[200px] will-change-transform transitionLow`}
					>
						<div className="w-full shadow-custom rounded px-4 py-6 mb-8">
							<h1 className="text-2xl font-semibold mb-4">
								Tìm kiếm
							</h1>
							<input
								type="text"
								placeholder="Nhập từ khóa"
								className="relative w-full border-2 px-4 py-2 rounded mb-4 z-0"
							/>
							<div className="flex gap-6 flex-wrap mb-4">
								<div className="flex-1 min-w-[90px]">
									<h2 className="text-lg font-semibold">
										Từ ngày
									</h2>
									<div className="relative">
										<DatePicker
											selected={selectedStartDate}
											onChange={(date) =>
												setSelectedStartDate(date)
											}
											dateFormat="MM/dd/yyyy"
											className="px-4 pl-8 py-1 border-b-2 outline-none w-full"
											placeholderText=""
										/>
										<FaCalendar className="absolute top-2 left-2" />
									</div>
								</div>
								<div className="flex-1 min-w-[90px]">
									<h2 className="text-lg font-semibold">
										Đến ngày
									</h2>
									<div className="relative">
										<DatePicker
											selected={selectedEndDate}
											onChange={(date) =>
												setSelectedEndDate(date)
											}
											dateFormat="MM/dd/yyyy"
											className="px-4 pl-8 py-1 border-b-2 outline-none w-full "
											placeholderText=""
										/>
										<FaCalendar className="absolute top-2 left-2" />
									</div>
								</div>
							</div>
							<ButtonPrimary className="bg-[#DC26262] px-4 py-1">
								LỌC
							</ButtonPrimary>
						</div>
						<div className="w-full shadow-custom rounded px-4 py-6">
							<h1 className="text-2xl font-semibold mb-4">
								Trạng thái tài sản
							</h1>
							<div className="flex flex-col gap-3">
								<label htmlFor="" className="">
									<input
										type="checkbox"
										className="w-4 h-4 mr-4"
									/>
									<span>Tất cả</span>
								</label>
								<label htmlFor="">
									<input
										type="checkbox"
										className="w-4 h-4 mr-4"
									/>
									Sắp diễn ra
								</label>
								<label htmlFor="">
									<input
										type="checkbox"
										className="w-4 h-4 mr-4"
									/>
									Đang diễn ra
								</label>
								<label htmlFor="">
									<input
										type="checkbox"
										className="w-4 h-4 mr-4"
									/>
									Đã kết thúc
								</label>
							</div>
						</div>
					</div>
					<div className="w-[75%]">
						<div className="flex gap-5 mb-4 justify-end">
							<select
								name=""
								id=""
								className={`${
									show
										? "opacity-100 translate-y-0"
										: " opacity-0 translate-y-6"
								} border-2 px-2 py-1 transitionLow`}
							>
								<option value="">Mới - cũ</option>
								<option value="">Cũ - mới</option>
							</select>
							<div
								className={`${
									show
										? "opacity-100 translate-y-0"
										: " opacity-0 translate-y-6"
								} flex border-2 items-center px-2 py-1 gap-2 transitionLow`}
							>
								<FiList
									onClick={() =>
										setShowSizeProject(!showSizeProject)
									}
									className="text-xl cursor-pointer text-gray-400"
								/>
								<PiSquaresFour
									onClick={() =>
										setShowSizeProject(!showSizeProject)
									}
									className="text-xl cursor-pointer "
								/>
							</div>
						</div>
						{/* mỗi cột có chiều rộng tối thiểu là 250px và tối đa là 1 phần của chiều rộng container (1fr). */}
						<div
							className={`${
								showSizeProject
									? "grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-6"
									: "w-full"
							} ${
								show
									? "opacity-100 translate-y-0"
									: " opacity-0 translate-y-6"
							} transitionLow ease-in-out`}
						>
							{/* start layout product */}
							{ListProjects.map((project, index) =>
								showSizeProject ? (
									<ShowPropertySmall key={index} />
								) : (
									<ShowProjectBig key={index} />
								)
							)}

							{/* end layout product */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AssetListPage;
