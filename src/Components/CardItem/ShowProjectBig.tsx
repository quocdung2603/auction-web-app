import ButtonPrimary from "../Button/ButtonPrimary";

const ShowProjectBig = () => {
	return (
		<div className="relative w-full flex shadow-custom mb-6 h-64 rounded overflow-hidden gap-6">
			<div className="relative w-1/3 h-full overflow-hidden box-border">
				<div className="absolute top-36 left-2/4 -translate-x-2/4 w-4/5 bg-white rounded-3xl py-3 px-2 z-10 text-center ">
					<p className="font-bold text-base">21/11/2024 09:00:00</p>
				</div>
				<div className="w-full overflow-hidden h-full box-border">
					<img
						className="h-full w-full cursor-pointer hover:scale-125 transitionHight rounded"
						src="https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/VPCP%20mi%E1%BB%81n%20Nam/80B-7299_1.jpg"
						alt=""
					/>
				</div>
			</div>
			<div className="h-full py-6">
				<div className="h-2/4">
					<h2 className="text-xl font-semibold">
						Lô 1: Lô ắc quy hư hỏng của Viễn thông Ninh Bình
					</h2>
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-gray-500">
						Giá khởi điểm:{" "}
						<span className="text-red-700 font-semibold">
							541,422,000{" "}
						</span>
						<span className="text-black font-semibold">VND</span>
					</p>
					<p className="text-gray-500">
						Trạng Thái:{" "}
						<span className="text-yellow-600 font-semibold">
							Chưa đấu giá
						</span>
					</p>
					<div>
						<ButtonPrimary className="px-4 py-1 font-bold text-xl">
							Chi Tiết
						</ButtonPrimary>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShowProjectBig;
