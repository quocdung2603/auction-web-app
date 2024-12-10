import ProductImage from "./Components/ProductImage";
import ProductInfo from "./Components/ProductInfo";
import ProductDescription from "./Components/ProductDescription";

const DataProperty =
  {
      id:"MTS-7FIRIV",
      gia_khoi_diem:"420.000.000",
      timeStartRegister:"02/12/2024 08:00:00",
      timeEndRegister:"16/12/2024 17:00:00",
      feeRegister:"200.000",
      priceStep:"10.000.000",
      priceStepMax:"10 bước giá, 40 phút cuối bước giá không giới hạn",
      deposit:"84.000.000",
      auctionMethod:"Trả giá lên và liên tục",
      propertyOwner:"Viễn thông Lâm Đồng",
      viewLocation:"Viễn thông Lâm Đồng",
      timeViewProperty:"Trong giờ hành chính kể từ ngày 11/12/2024 đến 17giờ00 ngày 13/12/2024",
      biddingStartTime:"19/12/2024 14:00:00",
      biddingEndTime:"19/12/2024 15:00:00",
  }

const ImageList = [
  {
    src: "https://data.lvo.vn/media/upload/1001406/IMAGE/Năm 2024/VPCP miền Nam/80B-7299_1.jpg",
    alt: "Image 1"
  },
  {
    src: "https://data.lvo.vn/media/upload/1001406/IMAGE/Năm 2024/VPCP miền Nam/80B-2672_1.jpg",
    alt: "Image 2"
  },
  {
    src: "https://data.lvo.vn/media/upload/1001406/IMAGE/Năm 2024/VPCP miền Nam/80B-2774_1.jpg",
    alt: "Image 3"
  },
  {
    src: "https://data.lvo.vn/media/upload/1001406/IMAGE/Năm 2024/VPCP miền Nam/80B-2672_2.jpg",
    alt: "Image 4"
  },
  {
    src: "https://data.lvo.vn/media/upload/1001406/IMAGE/Năm 2024/VPCP miền Nam/80B-2436_1.jpg",
    alt: "Image 5"
  }
]

const ProductDescriptionList = [
  {
    title: "Mô tả tài sản",
    content: "hehe 1",
    position: 0
  },
  {
    title: "Thông tin đấu giá",
    content: "hehe 2",
    position: 1
  },
  {
    title: "Tài liệu liên quan",
    content: "hehe 3",
    position: 2
  },
  {
    title: "Nộp phí/ Tiền đặt trước",
    content: "hehe 4",
    position: 3
  },
]

const productDetail = () => {
  return (
    <div className="mx-[7%]">
      <div className="py-[2%] border-b-2">
        <h1 className="text-3xl font-semibold mb-4">
          Lô 06 xe ô tô cũ các loại đã qua sử dụng do Cục Hành chính – Quản trị II, Văn phòng Chính phủ quản lý
        </h1>
        <p>Trang chủ / Danh mục tài sản</p>
      </div>
      <div className="flex flex-row mt-[4%] gap-5">
        <div className="w-7/12 flex flex-col space-y-5 overflow-hidden max-w-2/3">
          <ProductImage list={ImageList} />
        </div>
        <div className="w-5/12 space-y-5">
          <ProductInfo isGoingOn={true} DataProperty={DataProperty} />
        </div>
      </div>
      <ProductDescription list={ProductDescriptionList}/>
    </div>
  )
}

export default productDetail;