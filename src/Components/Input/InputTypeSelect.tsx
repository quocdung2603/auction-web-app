import React, { useState } from "react";

interface Options {
  value: any;
  label: string;
}

interface InputTypeSelectProps {
  title: string;
  content: any;
  setContent: React.Dispatch<React.SetStateAction<any>>;
  titleOption: Options[];
}

const InputTypeSelect: React.FC<InputTypeSelectProps> = ({
  title,
  content,
  setContent,
  titleOption,
}) => {
  const [searchTerm, setSearchTerm] = useState(""); // Trạng thái tìm kiếm
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Trạng thái mở/đóng dropdown

  // Lọc các option dựa trên từ khóa tìm kiếm
  const filteredOptions = titleOption.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full min-w-[200px] mb-5">
      <label className="block mb-1 text-lg text-black font-medium">{title}</label>
      <div
        className="w-full h-10 bg-gray-200 text-black text-sm border border-black rounded-3xl px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow-md cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
      >
        {content
          ? titleOption.find((option) => option.value === content)?.label || "Chọn..."
          : "Chọn..."}
      </div>
      {isDropdownOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {/* Input tìm kiếm */}
          <div className="p-2">
            <input
              type="text"
              className="w-full h-8 px-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* Danh sách các option */}
          {filteredOptions.map((item, index) => (
            <div
              key={index}
              className={`px-3 py-2 cursor-pointer hover:bg-[#FB9400] ${
                content === item.value ? "bg-gray-200" : ""
              }`}
              onClick={() => {
                setContent(item.value); // Cập nhật giá trị đã chọn
                setIsDropdownOpen(false); // Đóng dropdown
                setSearchTerm(""); // Xóa từ khóa tìm kiếm
              }}
            >
              {item.label}
            </div>
          ))}
          {filteredOptions.length === 0 && (
            <div className="px-3 py-2 text-red">Không có kết quả</div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputTypeSelect;
