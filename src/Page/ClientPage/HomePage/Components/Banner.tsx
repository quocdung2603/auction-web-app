import ButtonPrimary from "../../../../Components/Button/ButtonPrimary";

const Banner = () => {
	return (
		<div className="flex flex-row justify-between items-center py-[3%]">
			<div className="w-1/2 flex flex-col px-28">
				<p className="font-bold text-[#b41712] text-[20px]">
					Chào mừng bạn đến với ABC Auction
				</p>
				<p className="font-bold text-black text-[40px]">
					Nền tảng đấu giá trực tuyến hàng đầu Việt Nam
				</p>
				<p className="text-[grey] text-[17px] mb-6">
					Tự hào là một trong những nhà đấu giá lớn nhất tại Việt Nam,
					Lạc Việt luôn là đơn vị tiên phong ứng dụng công nghệ thông
					tin vào hoạt động đấu giá. Ngày 4/4/2025, ABC Company vinh
					dự tổ chức thành công cuộc đấu giá trực tuyến chính thống
					đầu tiên tại Việt Nam, mở ra 1 chương mới cho hoạt động đấu
					giá nước nhà.
				</p>
				<div>
					<ButtonPrimary className=" text-xl px-4 py-2">
						Khám phá
					</ButtonPrimary>
				</div>
			</div>
			<div className="w-1/2 ">
				<div className="w-3/4 h-[75vh] bg-red py-24 box-border float-end rounded-l-full">
					<div className="relative z-10 w-full h-full">
            <img
                src="https://data.lvo.vn/media/upload/1001768/photo_2024-04-03_16-02-36 0304.jpg"
                alt="Ảnh lớp phủ"
                className="absolute top-[50%] -translate-y-[50%] right-28 scale-125 object-cover shadow-lg"
              />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
