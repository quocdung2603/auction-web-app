import CardProduct from "../../../../Components/CardItem/CardProduct";
import { IconArrowRight, IconArrowLeft } from "../../../../Common/Icon/Icon";
import { Carousel } from "antd";
import { parseDateToISO } from "../../../../Util/ConverStringToTime";

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

      <div className="w-full justify-center items-center mt-[3.5%]">
        <Carousel
          speed={1000}
          dots={false}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay
          className="flex flex-row mx-[10%]"
        >
          {data.map((item,index) => (
            <CardProduct key={index+0} img={item.img} location={item.location} name={item.name} typeButton={item.typeButton} time={parseDateToISO(item.time)} price={item.price} />
          ))}
        </Carousel>
      </div>
      <button className="hover:bg-[#b41712] bg-white hover:text-white text-[#b41712] border border-[#b41712] font-bold text-[20px] px-[3%] py-[1%] mt-[3.5%]">Xem tất cả</button>
    </div>
  )
}

export default homeCarousel;