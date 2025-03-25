import { Link } from "react-router-dom";
import CardTimeout from "../../../../Components/CardItem/CardTimeout";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../Common/Context/AuthContext";
import {
  RegisterAution,
  ResponseCheckRegisterAution,
  ResponseRegisterAution,
} from "../../../../Type/Billing/BillingType";
import { BillingServices } from "../../../../Services/Billing/BillingService";
import { notification } from "antd";
import { AuctionSessionServices } from "../../../../Services/Auction/AuctionSessionServices";
import { HistoryRequest, HistoryResponseApi } from "../../../../Type/Auction/History";

interface AuctionData {
  id: number;
  priceStart: number;
  timeStartRegister: string;
  timeEndRegister: string;
  feeRegister: number;
  priceStep: number;
  auctionMethod: string;
  propertyOwner: string;
  viewLocation: string;
  timeViewProperty: string;
}

const propertyNames: { [key: string]: string } = {
  id: "Mã tài sản",
  priceStart: "Giá khởi điểm",
  timeStartRegister: "Thời gian mở đăng ký",
  timeEndRegister: "Thời gian kết thúc đăng ký",
  feeRegister: "Phí đăng ký tham gia đấu giá",
  priceStep: "Bước giá",
  auctionMethod: "Phương thức đấu giá",
  propertyOwner: "Tên chủ tài sản",
  viewLocation: "Nơi xem tài sản",
  timeViewProperty: "Thời gian xem tài sản",
};

interface InfoListProps {
  isGoingOn: string;
  DataProperty: AuctionData;
}

const ProductInfo: React.FC<InfoListProps> = ({ isGoingOn, DataProperty }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [bidPrice, setBidPrice] = useState<number | "">("");
  const [currentPrice, setCurrentPrice] = useState(DataProperty.priceStart);
  const [checkRegister, setCheckRegister] = useState<boolean | null>(null);
  const { user } = useAuth();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenBidModal = () => setIsBidModalOpen(true);
  const handleCloseBidModal = () => {
    setIsBidModalOpen(false);
    setBidPrice("");
  };

  const handleConfirm = async () => {
    if (!user) {
      notification.error({ message: "Vui lòng đăng nhập để đăng ký đấu giá" });
      return;
    }

    const dataRegister: RegisterAution = {
      userId: user.id,
      auctionId: DataProperty.id,
      price: DataProperty.feeRegister,
    };

    try {
      const res: ResponseRegisterAution = await BillingServices.resgisterAuction(dataRegister);
      window.location.href = res.data;
    } catch (error) {
      notification.error({ message: "Đăng ký thất bại" });
    } finally {
      handleCloseModal();
    }
  };

  const handleBidConfirm = async () => {
    const minRequiredPrice = currentPrice + DataProperty.priceStep;
    if (bidPrice === "" || bidPrice < minRequiredPrice) {
      notification.error({
        message: `Giá trả phải lớn hơn hoặc bằng ${minRequiredPrice.toLocaleString()} VND`,
      });
      return;
    }

    if (!user) {
      notification.error({ message: "Vui lòng đăng nhập để trả giá" });
      return;
    }

    const dataHistory: HistoryRequest = {
      auctionSessionId: DataProperty.id,
      userId: user.id,
      bidAmount: bidPrice,
    };

    try {
      await AuctionSessionServices.historyRequest(dataHistory);
      notification.success({
        message: `Đã trả giá ${bidPrice.toLocaleString()} VND thành công!`,
      });
      setCurrentPrice(bidPrice);
      handleCloseBidModal();
      window.location.reload();
    } catch (error) {
      notification.error({ message: "Lỗi khi gửi yêu cầu trả giá" });
    }
  };

  const CheckIsGoingOn = (condition: string) => {
    if (condition === "Đang diễn ra") {
      return (
        <div className="flex flex-col space-y-5">
          <CardTimeout timeout={DataProperty.timeEndRegister} />
        </div>
      );
    } else if (condition === "Chưa diễn ra") {
      return (
        <div className="flex flex-col space-y-5">
          <p className="text-[20px] text-red font-bold text-center">
            Cuộc đấu giá chưa diễn ra vui lòng đợi!
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col space-y-5">
          <p className="text-[18px] text-gray-500">Cuộc đấu giá đã kết thúc</p>
          <div className="flex flex-row justify-center items-center space-x-2 w-full border py-5 shadow-2xl">
            <p className="text-[24px] text-black font-bold">Xem kết quả cuộc đấu giá</p>
            <Link to="">
              <p className="text-[24px] text-blue-700 font-bold">Tại đây</p>
            </Link>
          </div>
        </div>
      );
    }
  };

  const renderCheckRegister = () => {
    console.log("checkRegister:", checkRegister); // Debug giá trị checkRegister
    if (checkRegister === null) return null; // Chưa có dữ liệu, không render gì
    return checkRegister ? (
      <button
        className="w-full py-2 text-lg px-5 bg-green-500 text-white font-medium"
        onClick={handleOpenBidModal}
      >
        Trả giá
      </button>
    ) : (
      <button
        className="w-full py-2 text-lg px-5 bg-red text-white font-medium"
        onClick={handleOpenModal}
      >
        Đăng ký tham gia đấu giá
      </button>
    );
  };

  const getAllHistoryPrice = async () => {
    try {
      const auctionId = DataProperty.id.toString();
      const res: HistoryResponseApi = await AuctionSessionServices.getAllHistoryRequest(auctionId);
      if (res.metadata.historyEntries.length > 0) {
        const bidAmount = res.metadata.historyEntries[0].bidAmount;
        const parsedBidAmount = typeof bidAmount === "string" ? parseInt(bidAmount, 10) : Number(bidAmount);
        if (!isNaN(parsedBidAmount)) {
          setCurrentPrice(parsedBidAmount);
        } else {
          console.error("Giá bidAmount không hợp lệ:", bidAmount);
          notification.error({ message: "Giá hiện tại từ lịch sử không hợp lệ" });
        }
      }
    } catch (error) {
      console.error("Lỗi lấy lịch sử đấu giá:", error);
      notification.error({ message: "Lỗi lấy dữ liệu lịch sử đấu giá" });
    }
  };

  const checkUserRegisterAution = async () => {
    if (!user) {
      setCheckRegister(false);
      return;
    }
    try {
      const res: ResponseCheckRegisterAution = await BillingServices.checkRegisterAution(
        user.id,
        DataProperty.id
      );
      setCheckRegister(res.data);
    } catch (error) {
      console.error("Lỗi kiểm tra đăng ký đấu giá:", error);
      notification.error({ message: "Không thể kiểm tra trạng thái đăng ký" });
      setCheckRegister(false); 
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      await checkUserRegisterAution();
      await getAllHistoryPrice();
    };
    initializeData();
  }, [user, DataProperty.id]);

  return (
    <>
      {CheckIsGoingOn(isGoingOn)}
      <div className="border p-3 bg-white space-y-3">
        <div className="flex justify-between">
          <p className="w-1/2 text-xl font-semibold text-gray-700">Giá khởi điểm:</p>
          <p className="w-1/2 text-end text-red text-xl font-semibold">
            {DataProperty.priceStart.toLocaleString()} VND
          </p>
        </div>
        {Object.entries(DataProperty).map(([key, value]) =>
          key !== "priceStart" ? (
            <div className="flex justify-between" key={key}>
              <p className="w-1/2 font-medium text-gray-400">{propertyNames[key]}:</p>
              <p className="w-1/2 text-end text-red font-medium">
                {typeof value === "number" ? value.toLocaleString() : value}
              </p>
            </div>
          ) : null
        )}
        {/* Hiển thị nút đăng ký hoặc trả giá dựa trên trạng thái đấu giá */}
        {isGoingOn === "Đang diễn ra" && checkRegister!==null && renderCheckRegister()}
      </div>

      {/* Modal xác nhận đăng ký */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Xác nhận đăng ký đấu giá</h2>
            <p className="mb-6">Bạn có chắc chắn muốn đăng ký tham gia đấu giá này không?</p>
            <div className="flex justify-between">
              <p className="w-1/2 font-medium text-gray-400">Phí tham gia:</p>
              <p className="w-1/2 text-end text-red font-medium">
                {DataProperty.feeRegister.toLocaleString()} VND
              </p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2 font-medium text-gray-400">Bước giá:</p>
              <p className="w-1/2 text-end text-red font-medium">
                {DataProperty.priceStep.toLocaleString()} VND
              </p>
            </div>
            <div className="flex items-center space-x-2 my-4">
              <input
                type="checkbox"
                id="terms"
                checked={isTermsAccepted}
                onChange={(e) => setIsTermsAccepted(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                Tôi đồng ý với{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  điều khoản tham gia
                </a>
              </label>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                onClick={handleCloseModal}
              >
                Hủy
              </button>
              <button
                className={`px-4 py-2 text-white rounded ${
                  isTermsAccepted ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={handleConfirm}
                disabled={!isTermsAccepted}
              >
                Đồng ý
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal trả giá */}
      {isBidModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Trả giá đấu giá</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="font-medium text-gray-400">Giá khởi điểm:</p>
                <p className="text-end text-red font-medium">
                  {DataProperty.priceStart.toLocaleString()} VND
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium text-gray-400">Bước giá:</p>
                <p className="text-end text-red font-medium">
                  {DataProperty.priceStep.toLocaleString()} VND
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium text-gray-400">Giá hiện tại:</p>
                <p className="text-end text-red font-medium">
                  {currentPrice.toLocaleString()} VND
                </p>
              </div>
              <div className="flex flex-col">
                <label className="font-medium text-gray-400 mb-1">Giá bạn muốn trả:</label>
                <input
                  type="number"
                  value={bidPrice}
                  onChange={(e) => setBidPrice(e.target.value ? Number(e.target.value) : "")}
                  placeholder={`Nhập giá >= ${(currentPrice + DataProperty.priceStep).toLocaleString()}`}
                  className="border p-2 rounded w-full"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                onClick={handleCloseBidModal}
              >
                Hủy
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleBidConfirm}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInfo;