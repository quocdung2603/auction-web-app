import { Link } from "react-router-dom";

interface ProductDetailProps {
  title: string;
  value: string | number;
  isBold: boolean;
  isTextBig: boolean;
}

interface InfoListProps {
  list: ProductDetailProps[];
  isGoingOn: boolean;
}

const countDown: any[] = [
  {
    title: "NGÀY",
    value: "04",
  },
  {
    title: "GIỜ",
    value: "14",
  },
  {
    title: "PHÚT",
    value: "36",
  },
  {
    title: "GIÂY",
    value: "23",
  },
]

function CheckIsGoingOn(condition: boolean) {
  if (condition) {
    return (
      <div className="flex flex-col space-y-5">
        <p className="text-[18px] text-gray-500">Thời gian đếm ngược bắt đầu trả giá:</p>
        <div className="flex flex-row justify-between items-center border py-[2%] px-[10%] shadow-xl">
          {countDown.map((item, index) => (
            <div key={index + 0} className="flex flex-col text-center">
              <p className="text-[24px] font-bold">{item.value}</p>
              <p className="text-[16px] text-gray-500">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="flex flex-col space-y-5">
        <p className="text-[18px] text-gray-500">Cuộc đấu giá đã kết thúc</p>
        <div className="flex flex-row justify-center items-center space-x-2 w-full border py-5 shadow-2xl">
          <p className="text-[24px] text-black font-bold">Xem kết quả cuộc đấu giá</p>
          <Link to="">
            <p className="text-[24px] text-primary font-bold">Tại đây</p>
          </Link>
        </div>
      </div>
    )
  }
}


const productInfo: React.FC<InfoListProps> = ({ list, isGoingOn }) => {
  return (
    <>
      {CheckIsGoingOn(isGoingOn)}
      <div className="border p-3 bg-white space-y-3">
        {list.map((item, index) => (
          <div key={index + 0} className="flex flex-row justify-between">
            <p className={`text-gray-500 text-[${item.isTextBig ? "18px" : "16px"}] text-left w-1/2 ${item.isBold ? "font-bold" : ""}`}>{item.title}</p>
            <p className={`text-primary text-[${item.isTextBig ? "18px" : "16px"}] text-right w-1/2 ${item.isBold ? "font-bold" : ""}`}>{item.value}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default productInfo;