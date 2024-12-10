
import { IconArrowRight, IconArrowLeft } from "../../../../Common/Icon/Icon";

import ShowPropertySmall from "../../../../Components/CardItem/ShowPropertySmall";
import ButtonPrimary from "../../../../Components/Button/ButtonPrimary";

interface ProductItem {
  img: string;
  location: string;
  name: string;
  typeButton: 1 | 2;
  time: string;
  price: string;
}

interface HomeCarouselProps {
  title: string;
  data: ProductItem[];
}

const homeCarousel:React.FC<HomeCarouselProps> = ({title, data}) => {
  return (
    <div className="flex flex-col items-center mt-[5%]">
      <div className="flex flex-row justify-center items-center">
        <IconArrowRight width="2.5rem" height="2.5rem" color="#b41712" />
        <p className="font-bold text-black text-[28px]">{title}</p>
        <IconArrowLeft width="2.5rem" height="2.5rem" color="#b41712" />
      </div>

      <div className="w-4/5 flex gap-4 justify-center items-center my-[3.5%] mx-10">
        <ShowPropertySmall/>
        <ShowPropertySmall/>
        <ShowPropertySmall/>
        <ShowPropertySmall/>
      </div>
      <ButtonPrimary className="text-xl py-3 px-8">Xem tất cả</ButtonPrimary>
    </div>
  )
}

export default homeCarousel;