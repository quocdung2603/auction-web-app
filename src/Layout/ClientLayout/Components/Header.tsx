import { Link } from "react-router-dom";

import Logo from "../../../Assets/Image/User/Logo.png";

import { GoBell } from "react-icons/go";
import { IoChevronForwardOutline } from "react-icons/io5";
// Component
import ButtonPrimary from "../../../Components/Button/ButtonPrimary";
import Login from "./Login";

import CurrentTime from "./CurrentTime";
import { useEffect, useState } from "react";

// API
import { fakeApi } from "../../../Util/fakeApi";
import { useAuth } from "../../../Common/Context/AuthContext";
import { Button } from "antd";

const Header = () => {
	const {token}=useAuth();
	const [login, setLogin] = useState<boolean>(true);
	const [showLogin, setShowLogin] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const listMenu = [
		{
			title: "Tài sản đấu giá",
			link: "",
			children: [
				{
					title: "Tài sản nhà nước",
					link: "",
				},
				{
					title: "Bất động sản",
					link: "",
				},
				{
					title: "Phương tiện - xe cộ",
					link: "",
				},
				{
					title: "Tang vật bị tịch thu",
					link: "",
				},
				{
					title: "Tài sản khác",
					link: "",
				},
			],
		},
		{
			title: "Cuộc đấu giá",
			link: "",
			children: [
				{
					title: "Cuộc đấu giá sắp diễn ra",
					link: "",
				},
				{
					title: "Cuộc đấu giá đang diễn ra",
					link: "",
				},
				{
					title: "Cuộc đấu giá đã kết thúc",
					link: "",
				},
			],
		},
		{
			title: "Liên hệ",
			link: "",
		},
	];

	useEffect(() => {
		const getProducts = async () => {
			try {
				const data = await fakeApi();
				console.log(data);
			} catch (err) {
				setError("Failed to fetch products");
			}
		};

		getProducts(); // Gọi khi component mount
	}, [token]);
	return (
    <header className="relative h-[100px] bg-primary px-custom flex justify-between shadow-custom">
      {/* left menu */}
      <div className="flex  justify-center gap-8 items-center">
        <Link to="/">
          <div className="flex items-center flex-col cursor-pointer">
            <img src={Logo} alt="" className="w-14 h-14" />
            <p className="text-textPrimary">Auction Table</p>
          </div>
        </Link>
        <div className="flex gap-10">
          {listMenu.map((item, index) => (
            <div
              key={index}
              className="group flex gap-1 items-center relative cursor-pointer"
            >
              <p className="text-textPrimary text-sx font-medium hover:text-red transitionHight">
                <Link to="/asset-list">{item.title}</Link>
              </p>
              {item.children && (
                <>
                  <IoChevronForwardOutline className="rotate-[90deg] text-textPrimary text-lg group-hover:rotate-[270deg] transitionLow" />
                  <div
                    className="absolute top-16 w-fit min-w-[13.5rem] bg-white py-3 opacity-0 -translate-y-4
  										shadow-custom group-hover:translate-y-0 group-hover:opacity-100 transitionHight"
                  >
                    {item.children.map((child, index) => (
                      <div
                        key={index}
                        className="py-2 cursor-pointer transitionLow group/SelectMenu"
                      >
                        <span className="px-3 font-semibold group-hover/SelectMenu:text-red transitionLow">
                          <Link to="/asset-list">{child.title}</Link>
                        </span>
                        <div className="h-1 w-0 group-hover/SelectMenu:w-full border-b-2 transitionLow origin-left border-red"></div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* right menu */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-8">
          <CurrentTime />
          <GoBell className="text-[1.5rem] cursor-pointer" />
          <div
            className="group/login relative"
            onClick={() => !token && setShowLogin(!showLogin)}
          >
            {token ? (
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c"
                    className="relative object-cover shrink-0 h-14 w-14 z-10 rounded-xl"
                  />
                </div>
                <p className="text-sm font-bold">Dũng Cute</p>
              </div>
            ) : (
              <Button className="relative py-2 px-4">
                Đăng Nhập
              </Button>
            )}
            {token ? (
              <div className="absolute scale-0 w-40 flex flex-col bg-white shadow-custom z-max group-hover/login:scale-100">
                <div className="hover:bg-gray-200 px-3 py-2 cursor-pointer">
                  <Link to="/personal">
                    <p>Thông tin cá nhân</p>
                  </Link>
                </div>
                <div className="hover:bg-gray-200 px-3 py-2 cursor-pointer">
                  <p>Thông báo</p>
                </div>
                <div className="hover:bg-gray-200 px-3 py-2 cursor-pointer">
                  <p>Đấu giá của tôi</p>
                </div>
                <div className="hover:bg-gray-200 px-3 py-2 cursor-pointer">
                  <p>Lịch sử đấu giá</p>
                </div>
                <div className="hover:bg-gray-200 px-3 py-2 cursor-pointer">
                  <p>Đăng xuất</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <Login showLogin={showLogin} setShowLogin={setShowLogin} />
        </div>
      </div>
    </header>
  );
};

export default Header;
