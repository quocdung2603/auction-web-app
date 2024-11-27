import ButtonPrimary from "../../../../Components/Button/ButtonPrimary";

const Banner = () => {
  return (
    <div className="flex flex-row justify-center items-center py-[3%]">
      <div className="w-1/2 flex flex-col px-[12%]">
        <p className="font-bold text-[#b41712] text-[20px]">
          Chào mừng bạn đến với ABC Auction
        </p>
        <p className="font-bold text-black text-[40px]">
          Nền tảng đấu giá trực tuyến hàng đầu Việt Nam
        </p>
        <p className="text-[grey] text-[17px]">
          Tự hào là một trong những nhà đấu giá lớn nhất tại Việt Nam, Lạc
          Việt luôn là đơn vị tiên phong ứng dụng công nghệ thông tin vào hoạt
          động đấu giá. Ngày 4/4/2025, ABC Company vinh dự tổ chức thành công
          cuộc đấu giá trực tuyến chính thống đầu tiên tại Việt Nam, mở ra 1
          chương mới cho hoạt động đấu giá nước nhà.
        </p>
        <ButtonPrimary className="  text-xl">Khám phá</ButtonPrimary>
      </div>
      <div className="w-1/2">
        <div className="relative w-[50%] h-[65vh] flex items-center justify-center ml-auto">
          {/* Nền màu đỏ */}
          <div className="absolute top-0 left-0 w-full h-full bg-red-600 rounded-tl-[20%] rounded-bl-[20%]"></div>

          {/* Ảnh chồng lên nền */}
          <div className="relative z-10 translate-x-[-30%]">
            <img
              src="https://data.lvo.vn/media/upload/1001768/photo_2024-04-03_16-02-36 0304.jpg"
              alt="Ảnh lớp phủ"
              className="min-w-[860px] min-h-[400px] object-cover shadow-lg" // Tăng width và height
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;