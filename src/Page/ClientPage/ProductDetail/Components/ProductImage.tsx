import { useState } from "react";

interface ProductImageProps {
  src: string;
  alt: string;
}

interface ImageListProps {
  list: ProductImageProps[];
}

const productImage: React.FC<ImageListProps> = ({ list }) => {
  const [currentImage, setCurrentImage] = useState<ProductImageProps>(list[0]);
  return (
    <>
      <div className=" w-full min-h-[200px] h-[600px] relative ">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="rounded object-cover w-full h-full"
        />

      </div>
      <div className="max-h-1/4 flex flex-row space-x-[4%] overflow-hidden">
        {list.map((item, index) => (
          <img
            key={index + 0}
            src={item.src}
            alt={item.alt}
            className="rounded w-[14%] max-h-[100px]"
            onClick={() => setCurrentImage(item)}
          />
        ))}
      </div>
    </>
  )
}

export default productImage;