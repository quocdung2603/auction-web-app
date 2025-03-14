import { useState } from "react";

interface ItemProductDescription {
  title: string;
  content: string;
}

interface ProductDescriptionProps {
  list: ItemProductDescription[];
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ list }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="mt-[4%]">
      <div className="flex flex-row space-x-[2%]">
        {list.map((item, index) => (
          <button
            key={index}
            className={`rounded p-4 shadow-lg hover:bg-blue-600 transition-all duration-300 ${
              activeTab === index ? "bg-blue-600 text-white" : "text-gray-800"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <p className="text-xl font-semibold">{item.title}</p>
          </button>
        ))}
      </div>
      <div className="border w-full mt-[2%] p-4 rounded-lg bg-gray-100">
        <p className="text-gray-900 text-lg">
          {list[activeTab]?.content || "Chưa có thông tin chi tiết"}
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;