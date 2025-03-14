import React, { useEffect, useState } from "react";
import ButtonPrimary from "../../../../Components/Button/ButtonPrimary";
import { Auction } from "../../../../Type/Auction/AuctionSession";
import { parseDateToISO } from "../../../../Util/ConverStringToTime";
import { Asset, ResponseDataAssetById } from "../../../../Type/Asset/Asset";
import { AssetServices } from "../../../../Services/Asset/AssetServices";
import CardTimeout from "../../../../Components/CardItem/CardTimeout";

interface ShowProductProps {
  auction: Auction;
}

const ShowProduct: React.FC<ShowProductProps> = ({ auction }) => {
  const [asset, setAsset] = useState<Asset>();
  const getDetailAsset = async () => {
    const res: ResponseDataAssetById = await AssetServices.getById(
      auction.assetId
    );
    setAsset(res.metadata);
  };

  const checkStatus = () => {
    const startDate = new Date(auction.startTime);
    const endDate = new Date(auction.endTime);
    const current = Date.now();

    if (current < startDate.getTime()) {
      return "Chưa bắt đầu"; // Upcoming
    } else if (current >= startDate.getTime() && current <= endDate.getTime()) {
      return "Đang diễn ra"; // Ongoing
    } else if (current > endDate.getTime()) {
      return "Đã kết thúc"; // Ended
    }
  };


  useEffect(() => {
    getDetailAsset();
  }, [auction]);

  return (
    <div className="relative w-full flex shadow-custom mb-6 h-64 rounded overflow-hidden">
      <div className="relative w-full flex shadow-custom mb-6 h-64 rounded overflow-hidden gap-6">
        <div className="relative w-1/3 h-full overflow-hidden box-border">
          <div className="absolute top-36 left-2/4 -translate-x-2/4 w-4/5 bg-white rounded-3xl py-3 px-2 z-10 text-center">
            <p className="font-bold text-base">
              {parseDateToISO(auction.startTime)}
            </p>
          </div>
          <div className="w-full overflow-hidden h-full box-border">
            <img
              className="h-full w-full cursor-pointer hover:scale-125 transitionHight rounded"
              src={asset?.mainImage}
              alt=""
            />
          </div>
        </div>
        <div className="h-full py-6">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">{auction.name}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-500">
              Phí tham gia:{" "}
              <span className="text-red-700 font-semibold">
                {auction.depositFee}{" "}
              </span>
              <span className="text-black font-semibold">VND</span>
            </p>
            <p className="text-gray-500">
              Tăng tối thiểu:{" "}
              <span className="text-red-700 font-semibold">
                {auction.bidStep}
              </span>
              <span className="text-black font-semibold">VND</span>
            </p>
            <p className="text-gray-500">
              Giá khởi điểm:{" "}
              <span className="text-red-700 font-semibold">
                {asset?.assetPrice}
              </span>
              <span className="text-black font-semibold">VND</span>
            </p>
            <p className="text-gray-500">
              Trạng Thái:{" "}
              <span className="text-yellow-600 font-semibold">
                {checkStatus()}
              </span>
            </p>
            <div>
              <ButtonPrimary className="px-4 py-1 font-bold text-xl" link={`/product-detail/${auction.id}`}>
                Chi Tiết
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full py-6 bg-white">
        <CardTimeout timeout={auction.endTime}></CardTimeout>
      </div>
    </div>
  );
};

export default ShowProduct;
