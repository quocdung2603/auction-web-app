import ShowProjectBig from "../../../../Components/CardItem/ShowProjectBig";

const MyAuction = () => {
	return (
		<>
			<div className="w-full bg-black rounded-t-md px-6 pt-4 pb-3">
				<p className="text-white text-xl font-semibold">Đấu giá của tôi</p>
			</div>
      <div className="w-full p-6 ">
				<div className="w-full mb-4">
					<div className="flex gap-4">
            <button className="border-small rounded px-4 py-1 font-medium text-white bg-red">Tất cả</button>
            <button className="border-small rounded px-4 py-1 font-medium">Sắp diễn ra</button>
            <button className="border-small rounded px-4 py-1 font-medium">Đang diễn ra</button>
            <button className="border-small rounded px-4 py-1 font-medium">Đã kết thúc</button>
          </div>
				</div>
        <div>
          <ShowProjectBig/>
        </div>
			</div>
		</>
	);
};

export default MyAuction;
