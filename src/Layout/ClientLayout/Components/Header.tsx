import Logo from "../../../Assets/Image/User/Logo.png";
import Avatar from "../../../Assets/Image/User/Avatar.png";

import { GoBell } from "react-icons/go";
import { IoChevronForwardOutline } from "react-icons/io5";
import { useState } from "react";
import LoginForm from "../../../Components/Form/LoginForm";
import { useAuth } from "../../../Context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <header className="h-[100px] bg-primary px-custom flex justify-between">
        {/* left menu */}
        <div className="flex  justify-center gap-8 items-center">
          <div className="flex items-center flex-col cursor-pointer">
            <img src={Logo} alt="" className="w-14 h-14" />
            <p className="text-white">Auction Table</p>
          </div>
          <div className="flex gap-10">
            <div className="group flex gap-1 items-center relative cursor-pointer">
              <p className="text-white text-sx font-medium">
                Tài sản đấu giá
              </p>
              <IoChevronForwardOutline className="rotate-[90deg] text-white text-lg group-hover:rotate-[270deg] transitionLow" />
              <div
                className="absolute top-16 min-w-44 bg-white w-40 py-3 opacity-0 -translate-y-4
  shadow-custom group-hover:translate-y-0 group-hover:opacity-100 transitionLow"
              >
                <div className="py-2 cursor-pointer transitionLow group/SelectMenu">
                  <p className="px-3 font-semibold group-hover/SelectMenu:text-primary  transitionLow">
                    Tài sản nhà nước
                  </p>
                  <div className="h-1 w-0 group-hover/SelectMenu:w-full border-b-2 transitionLow origin-left border-primary"></div>
                </div>

                <div className="py-2 cursor-pointer transitionLow group/SelectMenu">
                  <p className="px-3 font-semibold group-hover/SelectMenu:text-primary  transitionLow">
                    Bất động sản
                  </p>
                  <div className="h-1 w-0 group-hover/SelectMenu:w-full border-b-2 transitionLow origin-left border-primary"></div>
                </div>
              </div>
            </div>
            <div className="group flex gap-1 items-center relative cursor-pointer">
              <p className="text-white text-sx font-medium">
                Cuộc đấu giá
              </p>
              <IoChevronForwardOutline className="rotate-[90deg] text-white text-lg group-hover:rotate-[270deg] transitionLow" />
              <div
                className="absolute top-16 min-w-44 bg-white w-40 py-3 opacity-0 -translate-y-4
  shadow-custom group-hover:translate-y-0 group-hover:opacity-100 transitionLow"
              >
                <div className="py-2 cursor-pointer transitionLow group/SelectMenu">
                  <p className="px-3 font-semibold group-hover/SelectMenu:text-primary  transitionLow">
                    Tài sản nhà nước
                  </p>
                  <div className="h-1 w-0 group-hover/SelectMenu:w-full border-b-2 transitionLow origin-left border-primary"></div>
                </div>

                <div className="py-2 cursor-pointer transitionLow group/SelectMenu">
                  <p className="px-3 font-semibold group-hover/SelectMenu:text-primary  transitionLow">
                    Bất động sản
                  </p>
                  <div className="h-1 w-0 group-hover/SelectMenu:w-full border-b-2 transitionLow origin-left border-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right menu */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-8">
            <div className="flex flex-col ">
              <p className="text-white text-2xl font-medium">03:32:19</p>
              <p className="text-white text-sm">Thứ Ba, 19/11/2024</p>
              <p>{user?.email}</p>
            </div>
            <GoBell className="text-[1.5rem] cursor-pointer" />
            <button className="w-14 h-14 rounded-full overflow-hidden"
              onClick={() => setOpenModal(true)}
            >
              <img src={Avatar} alt="" />
            </button>
          </div>
        </div>
      </header>

      {openModal &&
        <LoginForm setOpenModal={setOpenModal} />
      }
    </>
  );
};

export default Header;
