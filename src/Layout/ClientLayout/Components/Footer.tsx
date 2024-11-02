import Logo from "../../../Assets/Image/User/Logo.png";
const Footer = () => {
	return (
		<div className=" bg-primary mt-8 ">
			<div className="max-w-[1148px] mx-auto flex py-10 gap-8 text-white">
				<div className="flex-[2] flex gap-4 flex-col">
					<div className="flex justify-center flex-col">
						<img src={Logo} alt="" className="w-16" />
						<h3 className="text-white">Auction Table</h3>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<div className="flex gap-4">
						<button className="px-6 py-2 bg-gray-200 rounded-md text-black">
							PlayStore
						</button>
						<button className="px-6 py-2 bg-gray-200 rounded-md text-black">
							AppleStore
						</button>
					</div>
				</div>
				<div className="flex-1 flex gap-6 flex-col mt-8">
					<h3>COMPANY</h3>
					<div className="flex gap-4 flex-col">
						<p>About us</p>
						<p>Legal information</p>
						<p>Contacts us</p>
						<p>Blogs</p>
					</div>
				</div>
				<div className="flex-1 flex gap-6 flex-col mt-8">
					<h3>HELP CENTER</h3>
					<div className="flex gap-4 flex-col">
						<p>Find A Property</p>
						<p>How to Host?</p>
						<p>Why Us?</p>
						<p>FAQs</p>
						<p>Rental Guides</p>
					</div>
				</div>
				<div className="flex-1 flex gap-6 flex-col mt-8">
					<h3>COMPANY</h3>
					<div className="flex gap-4 flex-col">
						<p>Phone: 1234567890</p>
						<p>Email: company@email.com</p>
						<p>Location: 100 Smart Street, LA, USA</p>
						<p></p>
					</div>
				</div>
			</div>
			<div className="border-t-[0.2px] border-white py-4">
				<div className="max-w-[1148px] mx-auto">
					<p className="text-white">
						© 2024 The AutionEase | All rights{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
