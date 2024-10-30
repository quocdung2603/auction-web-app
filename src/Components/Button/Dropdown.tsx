import React, { useEffect, useRef, useState } from "react";
import { IconTriagle } from "../../Common/Icon/Icon";
interface option {
  key: string,
  value: string,
}
interface DropdownProps {
    title: string,
    data: Array<option>,
    onChange?: React.Dispatch<React.SetStateAction<string>> 
}
const Dropdown: React.FC<DropdownProps> = ({title,data,onChange}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");

  const toggle = () => {
    setOpen(!open);
  };

  const setLang = (item: option) => {
    setValue(item.key);
    setOpen(false);
    if(onChange)
      onChange(item.value);
  };
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative min-w-[140px]">
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between border-b-[3px] border-[#D9D9D9] p-2"
      >
        <span>{value === "" ? title : value}</span>
        <IconTriagle></IconTriagle>
      </button>

      {open && (
        <ul className="z-10 absolute mt-1 w-full bg-gray-50 ring-1 ring-gray-300">
          {data.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer select-none p-2 hover:bg-gray-200"
              onClick={()=>{setLang(item)}}
            >
              {item.key}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;