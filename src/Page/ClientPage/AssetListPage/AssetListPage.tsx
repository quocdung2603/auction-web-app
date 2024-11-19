import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FaCalendar } from "react-icons/fa";
import { FiList } from "react-icons/fi";
import { PiSquaresFour } from "react-icons/pi";

const AssetListPage = () => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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
					<div className="w-[23%] min-w-[200px]  ">
						<div className="w-full shadow-custom rounded px-4 py-6 mb-8">
							<h1 className="text-2xl font-semibold mb-4">
								Tìm kiếm
							</h1>
							<input
								type="text"
								placeholder="Nhập từ khóa"
								className="w-full border-2 px-4 py-2 rounded mb-4"
							/>
							<div className="flex gap-6 flex-wrap mb-4">
								<div className="flex-1 min-w-[90px]">
									<h2 className="text-lg font-semibold">
										Từ ngày
									</h2>
									<div className="relative">
										<DatePicker
											selected={selectedDate}
											onChange={(date) =>
												setSelectedDate(date)
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
											selected={selectedDate}
											onChange={(date) =>
												setSelectedDate(date)
											}
											dateFormat="MM/dd/yyyy"
											className="px-4 pl-8 py-1 border-b-2 outline-none w-full "
											placeholderText=""
										/>
										<FaCalendar className="absolute top-2 left-2" />
									</div>
								</div>
							</div>
                            <button className="rounded-md bg-red-600 px-5 py-2 text-white font-semibold">LỌC</button>
						</div>
                        <div className="w-full shadow-custom rounded px-4 py-6">
							<h1 className="text-2xl font-semibold mb-4">
								Trạng thái tài sản
							</h1>
						</div>
					</div>
					<div className="w-[75%]">
						<div className="flex gap-5 mb-4 justify-end">
							<select
								name=""
								id=""
								className="border-2 px-2 py-1"
							>
								<option value="">Mới - cũ</option>
								<option value="">Cũ - mới</option>
							</select>
							<div className="flex border-2 items-center px-2 py-1 gap-2">
								<FiList className="text-xl cursor-pointer text-gray-400" />
								<PiSquaresFour className="text-xl cursor-pointer " />
							</div>
						</div>
						{/* mỗi cột có chiều rộng tối thiểu là 250px và tối đa là 1 phần của chiều rộng container (1fr). */}
						<div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-6">
							{/* start layout product */}
							<div className=" relative border-2 min-w-[200px] rounded-md overflow-hidden">
								<div className="absolute top-[130px] left-2/4 -translate-x-2/4 w-4/5 bg-white rounded-3xl py-3 px-2 z-10 text-center ">
									<p className="font-bold text-base">
										21/11/2024 09:00:00
									</p>
								</div>
								<div className="w-full h-[200px] overflow-hidden z-0">
									<img
										className="h-full w-full cursor-pointer hover:scale-125 transitionHight"
										src="https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/VPCP%20mi%E1%BB%81n%20Nam/80B-7299_1.jpg"
										alt=""
									/>
								</div>
								<div className="flex flex-col px-4 py-6 gap-2">
									<h4 className="font-bold mb-4">
										Lô 06 xe ô tô cũ các loại đã qua sử dụng
										do Cục Hành chính – Quản trị II, Văn
										phòng Chính phủ quản lý
									</h4>
									<p className="text-gray-600">
										Giá khởi điểm:{" "}
										<span className="text-red-500 font-semibold">
											1,361,494,000{" "}
										</span>
										<span className="text-black font-semibold">
											VNĐ
										</span>
									</p>
									<p className="text-gray-600">
										Trạng thái:{" "}
										<span className="text-yellow-500 font-semibold">
											Chưa đấu giá
										</span>
									</p>
									<div className="flex justify-between">
										<button className="rounded-lg bg-red-600 px-4 py-2 text-white font-semibold">
											Chi Tiết
										</button>
										<div>link</div>
									</div>
								</div>
							</div>
							{/* end layout product */}
							<div className=" relative border-2 min-w-[200px] rounded-md overflow-hidden">
								<div className="absolute top-[130px] left-2/4 -translate-x-2/4 w-4/5 bg-white rounded-3xl py-3 px-2 z-10 text-center ">
									<p className="font-bold text-base">
										21/11/2024 09:00:00
									</p>
								</div>
								<div className="w-full h-[200px] overflow-hidden z-0">
									<img
										className="h-full w-full cursor-pointer hover:scale-125 transitionHight"
										src="https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/VPCP%20mi%E1%BB%81n%20Nam/80B-7299_1.jpg"
										alt=""
									/>
								</div>
								<div className="flex flex-col px-4 py-6 gap-2">
									<h4 className="font-bold mb-4">
										Lô 06 xe ô tô cũ các loại đã qua sử dụng
										do Cục Hành chính – Quản trị II, Văn
										phòng Chính phủ quản lý
									</h4>
									<p className="text-gray-600">
										Giá khởi điểm:{" "}
										<span className="text-red-500 font-semibold">
											1,361,494,000{" "}
										</span>
										<span className="text-black font-semibold">
											VNĐ
										</span>
									</p>
									<p className="text-gray-600">
										Trạng thái:{" "}
										<span className="text-yellow-500 font-semibold">
											Chưa đấu giá
										</span>
									</p>
									<div className="flex justify-between">
										<button className="rounded-lg bg-red-600 px-4 py-2 text-white font-semibold">
											Chi Tiết
										</button>
										<div>link</div>
									</div>
								</div>
							</div>
							<div className=" relative border-2 min-w-[200px] rounded-md overflow-hidden">
								<div className="absolute top-[130px] left-2/4 -translate-x-2/4 w-4/5 bg-white rounded-3xl py-3 px-2 z-10 text-center ">
									<p className="font-bold text-base">
										21/11/2024 09:00:00
									</p>
								</div>
								<div className="w-full h-[200px] overflow-hidden z-0">
									<img
										className="h-full w-full cursor-pointer hover:scale-125 transitionHight"
										src="https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/VPCP%20mi%E1%BB%81n%20Nam/80B-7299_1.jpg"
										alt=""
									/>
								</div>
								<div className="flex flex-col px-4 py-6 gap-2">
									<h4 className="font-bold mb-4">
										Lô 06 xe ô tô cũ các loại đã qua sử dụng
										do Cục Hành chính – Quản trị II, Văn
										phòng Chính phủ quản lý
									</h4>
									<p className="text-gray-600">
										Giá khởi điểm:{" "}
										<span className="text-red-500 font-semibold">
											1,361,494,000{" "}
										</span>
										<span className="text-black font-semibold">
											VNĐ
										</span>
									</p>
									<p className="text-gray-600">
										Trạng thái:{" "}
										<span className="text-yellow-500 font-semibold">
											Chưa đấu giá
										</span>
									</p>
									<div className="flex justify-between">
										<button className="rounded-lg bg-red-600 px-4 py-2 text-white font-semibold">
											Chi Tiết
										</button>
										<div>link</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AssetListPage;
