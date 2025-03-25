import { useState } from "react";
import { FieldValues, UseControllerProps, useController } from "react-hook-form";

interface Options {
  value: any;
  label: string;
}

interface InputTypeSelectProps<T extends FieldValues> extends UseControllerProps<T> {
  title: string;
  titleOption: Options[];
  disabled?: boolean; // Đã có sẵn trong interface của bạn
}

const InputTypeSelect = <T extends FieldValues>({
  name,
  control,
  title,
  titleOption,
  rules,
  disabled = false,
}: InputTypeSelectProps<T>) => {
  const [searchTerm, setSearchTerm] = useState(""); // Trạng thái tìm kiếm
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Trạng thái mở/đóng dropdown

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController<T>({
    name,
    control,
    rules,
  });

  // Lọc các option dựa trên từ khóa tìm kiếm
  const filteredOptions = titleOption.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full min-w-[200px] mb-5">
      <label className="block mb-1 text-lg text-black font-medium">{title}</label>
      <div
        className={`w-full h-10 bg-gray-200 text-black text-sm border border-black rounded-3xl px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow-md cursor-pointer ${
          disabled ? "bg-gray-300 cursor-not-allowed opacity-50" : ""
        }`}
        onClick={() => !disabled && setIsDropdownOpen(!isDropdownOpen)} // Chỉ toggle dropdown nếu không bị disable
      >
        {value
          ? titleOption.find((option) => option.value === value)?.label || "Chọn..."
          : "Chọn..."}
      </div>
      {isDropdownOpen && !disabled && (
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
                value === item.value ? "bg-gray-200" : ""
              }`}
              onClick={() => {
                onChange(item.value);
                setIsDropdownOpen(false);
                setSearchTerm("");
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
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default InputTypeSelect;