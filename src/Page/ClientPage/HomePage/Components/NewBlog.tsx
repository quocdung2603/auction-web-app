import { IconArrowLeft, IconArrowRight } from "../../../../Common/Icon/Icon";
import CardBlog1 from "../../../../Components/CardItem/CardBlog1";
const newBlog = () => {
  return (
    <div className="w-full mt-[4%]">
      <div className="flex flex-row justify-center items-center">
        <IconArrowRight width="2.5rem" height="2.5rem" color="#b41712" />
        <p className="font-bold text-black text-[28px]">
          Tin tức & thông báo mới nhất
        </p>
        <IconArrowLeft width="2.5rem" height="2.5rem" color="#b41712" />
      </div>
      <div className="flex flex-row justify-center items-center mx-[10%] my-[4%] space-x-5">
        <CardBlog1
          img="https://data.lvo.vn/media/upload/1001210/Image/80B-7299_1.jpg"
          create_at="13/11/2024"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, at."
        />
        <CardBlog1
          img="https://data.lvo.vn/media/upload/1001210/Image/80B-7299_1.jpg"
          create_at="13/11/2024"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, at."
        />
        <CardBlog1
          img="https://data.lvo.vn/media/upload/1001210/Image/80B-7299_1.jpg"
          create_at="13/11/2024"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, at."
        />
        <CardBlog1
          img="https://data.lvo.vn/media/upload/1001210/Image/80B-7299_1.jpg"
          create_at="13/11/2024"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, at."
        />
      </div>
    </div>
  );
};

export default newBlog;
