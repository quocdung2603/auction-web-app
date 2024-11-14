import { IconArrowLeft, IconArrowRight } from "../../../../Common/Icon/Icon"

const partner = () => { 
  return (
    <div className="w-full mt-[4%] bg-gray-300 p-[3%]">
        <div className="flex flex-row justify-center items-center">
          <IconArrowRight width="2.5rem" height="2.5rem" color="#b41712" />
          <p className="font-bold text-black text-[28px]">Khách hàng & đối tác tiêu biểu</p>
          <IconArrowLeft width="2.5rem" height="2.5rem" color="#b41712" />
        </div>

        <div className="w-full flex flex-row justify-center items-center space-x-3 my-[4%]">
          <div className="w-[12%] p-[1%] rounded bg-white">
            <img src="https://ducanhland.com/wp-content/uploads/2021/08/ngan-hang-vpbank.jpg" alt="" />
          </div>
          <div className="w-[12%] p-[1%] rounded bg-white">
            <img src="https://ducanhland.com/wp-content/uploads/2021/08/ngan-hang-vpbank.jpg" alt="" />
          </div>
          <div className="w-[12%] p-[1%] rounded bg-white">
            <img src="https://ducanhland.com/wp-content/uploads/2021/08/ngan-hang-vpbank.jpg" alt="" />
          </div>
          <div className="w-[12%] p-[1%] rounded bg-white">
            <img src="https://ducanhland.com/wp-content/uploads/2021/08/ngan-hang-vpbank.jpg" alt="" />
          </div>
          <div className="w-[12%] p-[1%] rounded bg-white">
            <img src="https://ducanhland.com/wp-content/uploads/2021/08/ngan-hang-vpbank.jpg" alt="" />
          </div>
          <div className="w-[12%] p-[1%] rounded bg-white">
            <img src="https://ducanhland.com/wp-content/uploads/2021/08/ngan-hang-vpbank.jpg" alt="" />
          </div>
        </div>
      </div>
  )
}

export default partner;