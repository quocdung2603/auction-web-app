import { useEffect, useState } from "react";
import { useAuth } from "../../../../Common/Context/AuthContext";
import {
  Auction,
  ResponseAuctionDataById,
  ResponseDataAuctionBid,
} from "../../../../Type/Auction/AuctionSession";
import { notification } from "antd";
import { AuctionSessionServices } from "../../../../Services/Auction/AuctionSessionServices";
import ShowProduct from "../../AssetListPage/Components/ShowProduct";

const MyAuction = () => {
  const { user } = useAuth();
  const [listAuction, setListAuction] = useState<Auction[]>([]);
  const [listAuctionFilter, setListAuctionFilter] = useState<Auction[]>([]);
  const [filterAuction,setFilterAuction]=useState<string>("Tất cả");

  const getAllAuctionByUser = async () => {
    try {
      if (user) {
        const res: ResponseDataAuctionBid =
          await AuctionSessionServices.getAutionByUserId(user.id);
        const listAutionData: Auction[] = await Promise.all(
          res.data.map(async (item) => {
            const auctionId = item.auctionId.toString();
            const res: ResponseAuctionDataById =
              await AuctionSessionServices.getById(auctionId);
            return res.metadata.auctionSession;
          })
        );
        setListAuction(listAutionData);
        setListAuctionFilter(listAutionData);
      }
    } catch (error) {
      notification.error({ message: "Lỗi lấy dữ liệu" });
    }
  };

  const checkStatus = (auction: Auction): string => {
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
    return ""; // Để tránh lỗi TS, mặc dù logic trên đã bao phủ mọi trường hợp
  };

  // Hàm filter theo trạng thái
  const filterAuctions = (status: string) => {
  	setFilterAuction(status);
    if (status === "Tất cả") {
      setListAuctionFilter(listAuction);
    } else {
      const filtered = listAuction.filter((item) => checkStatus(item) === status);
      setListAuctionFilter(filtered);
    }
  };

  useEffect(() => {
    if (user) getAllAuctionByUser();
  }, [user]);

  return (
    <>
      <div className="w-full bg-black rounded-t-md px-6 pt-4 pb-3">
        <p className="text-white text-xl font-semibold">Đấu giá của tôi</p>
      </div>
      <div className="w-full p-6">
        <div className="w-full mb-4">
          <div className="flex gap-4">
            <button
              className={`border-small rounded px-4 py-1 font-medium  ${filterAuction==="Tất cả" && 'bg-red text-white'}`}
              onClick={() => filterAuctions("Tất cả")}
            >
              Tất cả
            </button>
            <button
              className={`border-small rounded px-4 py-1 font-medium  ${filterAuction==="Đang diễn ra" && 'bg-red text-white'}`}
              onClick={() => filterAuctions("Đang diễn ra")}
            >
              Đang diễn ra
            </button>
            <button
              className={`border-small rounded px-4 py-1 font-medium  ${filterAuction==="Đã kết thúc" && 'bg-red text-white'}`}
              onClick={() => filterAuctions("Đã kết thúc")}
            >
              Đã kết thúc
            </button>
          </div>
        </div>
        <div>
          {listAuctionFilter.map((product, index) => (
            <ShowProduct key={index} auction={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyAuction;