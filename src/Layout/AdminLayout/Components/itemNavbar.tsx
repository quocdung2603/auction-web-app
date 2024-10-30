import React from "react";
import { Link } from "react-router-dom";
interface ItemNavBarProps{
    content: string,
    icon: React.ReactNode,
    href: string
}

const itemNavBar:React.FC<ItemNavBarProps>=({ content, icon, href})=> {
  return (
    <Link
      to={href}
      className="hover:bg-orange-700 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
    >
      <div className="relative flex flex-col space-y-2 md:flex-row gap-3 md:space-y-0 space-x-2 items-center">
        <div>{icon}</div>
        <div>
          <p className="font-bold text-textsidebar lg:text-sm  leading-4 group-hover:text-white">
            {content}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default itemNavBar;