import ButtonPrimary from "../../../../Components/Button/ButtonPrimary";

const ShowPropertySmall = () => {
	return (
		<div className=" relative border-2 min-w-[200px] rounded-md overflow-hidden">
			<div className="absolute top-[130px] left-2/4 -translate-x-2/4 w-4/5 bg-white rounded-3xl py-3 px-2 z-10 text-center ">
				<p className="font-bold text-base">21/11/2024 09:00:00</p>
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
					Lô 06 xe ô tô cũ các loại đã qua sử dụng do Cục Hành chính –
					Quản trị II, Văn phòng Chính phủ quản lý
				</h4>
				<p className="text-gray-600">
					Giá khởi điểm:{" "}
					<span className="text-red-500 font-semibold">
						1,361,494,000{" "}
					</span>
					<span className="text-black font-semibold">VNĐ</span>
				</p>
				<p className="text-gray-600">
					Trạng thái:{" "}
					<span className="text-yellow-500 font-semibold">
						Chưa đấu giá
					</span>
				</p>
				<div className="flex justify-between">
					<ButtonPrimary className="bg-[#DC26262] px-4 py-2">
						Chi Tiết
					</ButtonPrimary>
					<div>link</div>
				</div>
			</div>
		</div>
	);
};

export default ShowPropertySmall;
