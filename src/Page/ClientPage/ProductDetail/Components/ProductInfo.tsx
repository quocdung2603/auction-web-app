import { Link } from "react-router-dom";
import CardTimeout from "../../../../Components/CardItem/CardTimeout";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../Common/Context/AuthContext";
import { RegisterAution, ResponseCheckRegisterAution, ResponseRegisterAution } from "../../../../Type/Billing/BillingType";
import { BillingServices } from "../../../../Services/Billing/BillingService";
import { notification } from "antd";

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
  // State để điều khiển modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
const {user}=useAuth();
  // Hàm mở modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Hàm đóng modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Hàm xử lý khi người dùng đồng ý
  const handleConfirm = async() => {
	if(user)
	{
		const dataRegister:RegisterAution={
			userId: user?.id,
			auctionId: DataProperty.id,
			price: DataProperty.feeRegister
		}
		try {
			const res:ResponseRegisterAution= await BillingServices.resgisterAuction(dataRegister);
			window.location.href=res.data;
		} catch (error) {
			notification.error({message: "Đăng ký thất bại"});
		}
		handleCloseModal();
	} 
  };

  function CheckIsGoingOn(condition: string) {
    if (condition === "Đang diễn ra") {
      return (
        <div className="flex flex-col space-y-5">
          <CardTimeout timeout={DataProperty.timeEndRegister}></CardTimeout>
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
            <p className="text-[24px] text-black font-bold">
              Xem kết quả cuộc đấu giá
            </p>
            <Link to="">
              <p className="text-[24px] text-primary font-bold">Tại đây</p>
            </Link>
          </div>
        </div>
      );
    }
  }
  const [checkRegister,setCheckRegister]=useState<boolean>(false);
  const renderCheckRegister = ()=>{
	switch (checkRegister) {
		case true:
			return <button
            className="w-full py-2 text-lg px-5 bg-green-500 text-white font-medium"
          >
            Trả giá
          </button>
	
		default:
			return <button
            className="w-full py-2 text-lg px-5 bg-red text-white font-medium"
            onClick={handleOpenModal} 
          >
            Đăng ký tham gia đấu giá
          </button>
			
	}
  }
  const checkUserRegisterAution = async()=>{
	try {
		if(user)
		{
			const res:ResponseCheckRegisterAution = await BillingServices.checkRegisterAution(user.id,DataProperty.id);
			setCheckRegister(res.data);
		}
	} catch (error) {
		notification.error({message: "Lấy api thất bại"});
	}
  }
  useEffect(()=>{
	if(user)
	{
		checkUserRegisterAution();
	}
  },[user])
  return (
    <>
      {CheckIsGoingOn(isGoingOn)}
      <div className="border p-3 bg-white space-y-3">
        <div className="flex justify-between">
          <p className="w-1/2 text-xl font-semibold text-gray-700">
            Giá khởi điểm:
          </p>
          <p className="w-1/2 text-end text-red text-xl font-semibold">
            {DataProperty.priceStart} VND
          </p>
        </div>
        {Object.entries(DataProperty).map(([key, value]) =>
          key !== "priceStart" ? ( // Đổi từ "gia_khoi_diem" thành "priceStart" để khớp key
            <div className="flex justify-between" key={key}>
              <p className="w-1/2 font-medium text-gray-400">
                {propertyNames[key]}:
              </p>
              <p className="w-1/2 text-end text-red font-medium">{value}</p>
            </div>
          ) : null
        )}
        {isGoingOn === "Đang diễn ra" && (
          renderCheckRegister()
        )}
      </div>

      {/* Modal xác nhận */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              Xác nhận đăng ký đấu giá
            </h2>
            <p className="mb-6">
              Bạn có chắc chắn muốn đăng ký tham gia đấu giá này không?
            </p>
            <div className="flex justify-between">
              <p className="w-1/2 font-medium text-gray-400">Phí tham gia:</p>
              <p className="w-1/2 text-end text-red font-medium">
                {DataProperty.feeRegister}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2 font-medium text-gray-400">Bước giá:</p>
              <p className="w-1/2 text-end text-red font-medium">
                {DataProperty.priceStep}
              </p>
            </div>
            {/* Checkbox chấp nhận điều khoản */}
            <div className="flex items-center space-x-2 my-4">
              <input
                type="checkbox"
                id="terms"
                checked={isTermsAccepted} // State để theo dõi
                onChange={(e) => setIsTermsAccepted(e.target.checked)} // Cập nhật state
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
                  isTermsAccepted
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={handleConfirm}
                disabled={!isTermsAccepted} // Vô hiệu hóa nếu chưa tích
              >
                Đồng ý
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInfo;
