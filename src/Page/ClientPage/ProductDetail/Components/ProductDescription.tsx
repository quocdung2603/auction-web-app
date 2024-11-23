import { useState } from "react";

interface ItemProductDescription {
  title: string;
  content: string;
  position: number;
}

interface ProductDescriptionProps {
  list: ItemProductDescription[];
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ list }) => {
  const [active, setActive] = useState<number>(0);

  return (
    <>
      <div className="flex flex-row space-x-[2%] mt-[4%]">
        {list.map((item, index) => (
          <button
            key={index + 0}
            className={`rounded p-4 shadow-lg hover:bg-primary transitionHight ${
              active === item.position ? "bg-primary text-white transitionHight" : "text-black"
            }`}
            onClick={() => setActive(item.position)}
          >
            <p className="text-[24px] font-bold transitionHight">{item.title}</p>
          </button>
        ))}
      </div>
      <div className="border w-full mt-[2%] p-3">
        {list.find((item) => item.position === active)?.content}
      </div>
    </>
  );
};

export default ProductDescription;
