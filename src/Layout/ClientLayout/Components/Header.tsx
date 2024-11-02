import Logo from "../../../Assets/Image/User/Logo.png";
import Avatar from "../../../Assets/Image/User/Avatar.png";
import Slider1 from "../../../Assets/Image/User/Slider1.png";
import Slider2 from "../../../Assets/Image/User/Slider2.png";

import { GoBell } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
	return (
		<>
			<header className="h-[100px] bg-primary px-[6rem] flex justify-between">
				{/* left menu */}
				<div className="flex  justify-center gap-8 items-center">
					<div className="flex items-center flex-col cursor-pointer">
						<img src={Logo} alt="" className="w-14 h-14" />
						<p className="text-white">Auction Table</p>
					</div>
					<div className="flex gap-8">
						<p className="text-white cursor-pointer">Home</p>
						<p className="text-white cursor-pointer">Catergory</p>
						<p className="cursor-pointer">Sell</p>
					</div>
				</div>
				{/* right menu */}
				<div className="flex items-center justify-center">
					<div className="flex items-center gap-8">
						<GoBell className="text-[1.5rem] cursor-pointer" />
						<div className="w-14 h-14 rounded-full overflow-hidden">
							<img src={Avatar} alt="" />
						</div>
					</div>
				</div>
			</header>
			{/* Search bar */}
			<div className="w-full flex items-center flex-col">
				<div className="w-[40%] mx-auto relative mt-8">
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
				</div>
				{/* Slider */}
				<div className="w-full flex mt-10">
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
				</div>
			</div>
		</>
	);
};

export default Header;
