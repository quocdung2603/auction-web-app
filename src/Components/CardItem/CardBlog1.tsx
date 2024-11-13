import { IconCalender } from "../../Common/Icon/Icon";

interface CardBlog1Props {
  title: string;
  img: string;
  create_at: string;
}

const cardBlog1:React.FC<CardBlog1Props> = ({...props}) => {
  return (
    <div className="relative w-[300px] rounded flex flex-col space-y-2 pb-8 -z-10 group">
      <img src={props.img} alt="" className="rounded"/>
      <div className="p-1 space-x-3 flex flex-row absolute top-5 r-0 bg-[#b41712] rounded-tr-[10px] rounded-br-[10px]">
        <IconCalender width="2em" height="2em" />
        <p className="text-white text-[20px]">{props.create_at}</p>
      </div>
      <div className="mx-[10px] p-3 text-center absolute top-[60%] bg-white rounded shadow-lg">
        <p className="font-bold text-[18px] text-black group-hover:text-[#b41712]">
          {props.title}
        </p>
      </div>
    </div>
  )
}

export default cardBlog1;
