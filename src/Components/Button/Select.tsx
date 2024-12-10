import React from 'react';

type Option = {
  value: string | number;
  label: string;
};

type SelectProps = {
  options: Option[];
  value: string | number | undefined;
  onChange: (value: string | number) => void; 
  placeholder?: string; 
  disabled?: boolean; 
};

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className="border px-4 py-2 bg-red-500 border-red-500 text-white rounded-[10px]"
    >
      {/* Placeholder option */}
      <option value="Auction Type" disabled hidden>
        {placeholder}
      </option>

      {/* Render danh sách tùy chọn */}
      {options.map((option) => (
        <option key={option.value} value={option.value} className='text-black bg-white'>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;