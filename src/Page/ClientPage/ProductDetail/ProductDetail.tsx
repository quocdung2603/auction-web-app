import ProductImage from "./Components/ProductImage";
import ProductInfo from "./Components/ProductInfo";
import ProductDescription from "./Components/ProductDescription";
import OtherProduct from "./Components/OtherProduct";

interface CardProductProps {
  img: string;
  name: string;
  location: string;
  time: string;
  price: string;
  typeButton: 1 | 2; //1: add , 2: add list
}

const InfoList = [
  {
    title: "Giá khởi điểm",
    value: "1.361.494.000 VNĐ",
    isBold: true,
    isTextBig: true
  },
  {
    title: "Mã tài sản",
    value: "MTS-HLRK4W",
    isBold: false,
    isTextBig: false
  },
  {
    title: "Thời gian mở đăng ký",
    value: "11/11/2024 08:00:00",
    isBold: false,
    isTextBig: false
  },
  {
    title: "Thời gian kết thúc đăng ký",
    value: "18/11/2024 17:00:00",
    isBold: false,
    isTextBig: false
  },
  {
    title: "Phí đăng ký tham gia đấu giá",
    value: "500.000 VNĐ",
    isBold: false,
    isTextBig: false
  },
  {
    title: "Bước giá",
    value: "5.000.000 VNĐ",
    isBold: false,
    isTextBig: false
  },
  {
    title: "Số bước giá tối đa/ lần trả",
    value: "Bước giá không giới hạn",
    isBold: false,
    isTextBig: false
  },
  {
    title: "Tiền đặt trước",
    value: "272.000.000 VNĐ",
    isBold: false,
    isTextBig: false
  },
  {
    title: "Phương thức đấu giá:",
    value: "Trả giá lên và liên tục",
    isBold: false,
    isTextBig: false
  },
  {
    title: "Tên chủ tài sản:",
    value: "Cục Hành chính – Quản trị II, Văn phòng Chính phủ",
    isBold: false,
    isTextBig: false
  },
  {
    title: "Nơi xem tài sản:",
    value: "Cục Hành chính – Quản trị II, Văn phòng Chính phủ, địa chỉ: Số 7 Lê Duẩn, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
    isBold: false,
    isTextBig: false
  },
  {
    title: "Thời gian xem tài sản:",
    value: "Ngày 14/11/2024 và ngày 15/11/2024",
    isBold: false,
    isTextBig: false
  },
  {
    title: "Thời gian bắt đầu trả giá:",
    value: "21/11/2024 09:00:00",
    isBold: false,
    isTextBig: false
  },
  {
    title: "Thời gian kết thúc trả giá:",
    value: "21/11/2024 10:00:00",
    isBold: false,
    isTextBig: false
  },
]

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

const OtherProductList:Array<CardProductProps> = [
  {
    img: "https://data.lvo.vn/media/upload/1001406/IMAGE/Năm 2024/VPCP miền Nam/80B-7299_1.jpg",
    name: "Lô 06 xe ô tô cũ các loại đã qua sử dụng do Cục Hành chính",
    location: "TP. Hồ Chí Minh",
    time: "21/11/2024 09:00:00",
    price: "1.361.494.000 VNĐ",
    typeButton: 1
  },
  {
    img: "https://data.lvo.vn/media/upload/1001406/IMAGE/Năm 2024/VPCP miền Nam/80B-7299_1.jpg",
    name: "Lô 06 xe ô tô cũ các loại đã qua sử dụng do Cục Hành chính",
    location: "TP. Hồ Chí Minh",
    time: "21/11/2024 09:00:00",
    price: "1.361.494.000 VNĐ",
    typeButton: 1
  },
  {
    img: "https://data.lvo.vn/media/upload/1001406/IMAGE/Năm 2024/VPCP miền Nam/80B-7299_1.jpg",
    name: "Lô 06 xe ô tô cũ các loại đã qua sử dụng do Cục Hành chính",
    location: "TP. Hồ Chí Minh",
    time: "21/11/2024 09:00:00",
    price: "1.361.494.000 VNĐ",
    typeButton: 1
  },
  {
    img: "https://data.lvo.vn/media/upload/1001406/IMAGE/Năm 2024/VPCP miền Nam/80B-7299_1.jpg",
    name: "Lô 06 xe ô tô cũ các loại đã qua sử dụng do Cục Hành chính",
    location: "TP. Hồ Chí Minh",
    time: "21/11/2024 09:00:00",
    price: "1.361.494.000 VNĐ",
    typeButton: 1
  },
  {
    img: "https://data.lvo.vn/media/upload/1001406/IMAGE/Năm 2024/VPCP miền Nam/80B-7299_1.jpg",
    name: "Lô 06 xe ô tô cũ các loại đã qua sử dụng do Cục Hành chính",
    location: "TP. Hồ Chí Minh",
    time: "21/11/2024 09:00:00",
    price: "1.361.494.000 VNĐ",
    typeButton: 1
  },
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
    <div className="mx-[10%]">
      <div className="py-[2%] border-b-2">
        <h1 className="text-3xl font-semibold mb-4">
          Lô 06 xe ô tô cũ các loại đã qua sử dụng do Cục Hành chính – Quản trị II, Văn phòng Chính phủ quản lý
        </h1>
        <p>Trang chủ / Danh mục tài sản</p>
      </div>
      <div className="flex flex-row space-x-[2%] mt-[4%]">
        <div className="w-2/3 flex flex-col space-y-5 overflow-hidden max-w-2/3">
          <ProductImage list={ImageList} />
        </div>
        <div className="w-1/3 space-y-5">
          <ProductInfo list={InfoList} isGoingOn={true} />
        </div>
      </div>
      <ProductDescription list={ProductDescriptionList}/>
      <OtherProduct list={OtherProductList} />
    </div>
  )
}

export default productDetail;