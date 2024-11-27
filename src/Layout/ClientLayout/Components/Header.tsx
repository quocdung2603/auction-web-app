import { Link } from "react-router-dom";

import Logo from "../../../Assets/Image/User/Logo.png";
import Avatar from "../../../Assets/Image/User/Avatar.png";

import { GoBell } from "react-icons/go";
import { IoChevronForwardOutline } from "react-icons/io5";

import CurrentTime from "./CurrentTime";

const Header = () => {
	return (
		<>
			<header className="h-[100px] bg-primary px-custom flex justify-between">
				{/* left menu */}
				<div className="flex  justify-center gap-8 items-center">
					<div className="flex items-center flex-col cursor-pointer">
						<img src={Logo} alt="" className="w-14 h-14" />
						<p className="text-white">
							<Link to="/">Auction Table</Link>
						</p>
					</div>
					<div className="flex gap-10">
						<div className="group flex gap-1 items-center relative cursor-pointer">
							<p className="text-white text-sx font-medium">
								<Link to="/asset-list">Tài sản đấu giá</Link>
							</p>
							<IoChevronForwardOutline className="rotate-[90deg] text-white text-lg group-hover:rotate-[270deg] transitionLow" />
							<div
								className="absolute top-16 min-w-44 bg-white w-40 py-3 opacity-0 -translate-y-4
  shadow-custom group-hover:translate-y-0 group-hover:opacity-100 transitionLow"
							>
								<div className="py-2 cursor-pointer transitionLow group/SelectMenu">
									<p className="px-3 font-semibold group-hover/SelectMenu:text-primary  transitionLow">
										<Link to="/asset-list">
											Tài sản nhà nước
										</Link>
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
					<div>
						<Link to="/contact">Liên hệ</Link>
					</div>
				</div>
				{/* right menu */}
				<div className="flex items-center justify-center">
					<div className="flex items-center gap-8">
						<CurrentTime />
						<GoBell className="text-[1.5rem] cursor-pointer" />
						<div className="w-14 h-14 rounded-full overflow-hidden">
							<img src={Avatar} alt="" />
						</div>
					</div>
				</div>
			</header>
			{/* Search bar */}
			<div className="w-full flex items-center flex-col">
				{/* <div className="w-[40%] mx-auto relative mt-8">
					<IoMdSearch className="absolute top-[50%] translate-y-[-50%] left-4 text-[1.8rem]" />
					<input
						className=" w-full rounded-3xl border-2 border-primary px-4 py-3 pl-12 
						placeholder:text-[1.2rem] cursor-pointer"
						placeholder="Search for products"
					/>
					<div
						className="absolute bg-primary w-[140px] right-0 top-0 h-full rounded-r-3xl 
					flex items-center justify-center gap-4 cursor-pointer"
					>
						<p className="text-white">Category</p>
						<FaAngleDown className="text-white" />
					</div>
				</div> */}
				{/* Slider */}
				{/* <div className="w-full flex mt-10">
					<div className="flex-1">
						<img
							className="w-full max-h-[300px]"
							src={Slider1}
							alt=""
						/>
					</div>
					<div className="flex-1">
						<img
							className="w-full max-h-[300px]"
							src={Slider2}
							alt=""
						/>
					</div>
					<div className="flex-1">
						<img
							className="w-full max-h-[300px]"
							src={Slider1}
							alt=""
						/>
					</div>
					<div className="flex-1">
						<img
							className="w-full max-h-[300px]"
							src={Slider2}
							alt=""
						/>
					</div>
				</div> */}
			</div>
		</>
	);
};

export default Header;
